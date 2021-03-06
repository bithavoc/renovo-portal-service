import { uuid } from "uuidv4";
import AssetEntity from "../database/entity/Asset";
import AssetProtectionEntity from "../database/entity/AssetProtection";
import AssetSiteEntity from "../database/entity/AssetSite";
import OrganizationEntity from "../database/entity/Organization";
import ProtectionEntity from "../database/entity/Protection";
import ProtectionSiteEntity, { Purpose } from "../database/entity/ProtectionSite";
import SiteEntity from "../database/entity/Site";
import SiteOrganizationEntity from "../database/entity/SiteOrganization";
import { PropType } from "../util/type";
import { assetProtectionId } from "./identifiers";
import { Api, HttpClient, ProtectedVpgs, RequestParams, SiteDetails, SiteTopology, SupportedZorg, Vms, Vpg, VpgHealth, Zorg } from "./zerto/zerto-sdk";

const createBaseParams = () => ({
    baseURL: "https://analytics.api.zerto.com",
});

const createZertoClient = async (username: string, password: string) => {
    const anonApi = new Api({
        ...createBaseParams(),
    });

    console.log("zerto token negotiating")
    const tokenRes = await anonApi.v2.authTokenCreate({
        username,
        password,
    })

    const token = tokenRes.data.token;

    console.log("zerto token ok")
    const authApi = new Api({
        // baseURL: "https://analytics.api.zerto.com",
        ...createBaseParams(),
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
    return authApi;
};

const companyOrganizationId = (zorgId: string | null | undefined): string | null => zorgId ? `zorg_${zorgId}` : null;

const zsiteSiteId = (zertoSiteId: string) => `zsite_${zertoSiteId}`;
const vmsAssetId = (vmsId: string) => `zvms_${vmsId}`;
const vpgProtectionId = (vpgId: string) => `zvpg_${vpgId}`;

type VPGSite = {
    site: ExtProtectedVmsSite;
    purpose: Purpose;
}

const getVPGSites = (vpg: ProtectedVpgs) => {
    const sites: VPGSite[] = [];
    if (vpg.protectedSite) {
        sites.push({
            site: vpg.protectedSite as ExtProtectedVmsSite,
            purpose: 'protection',
        });
    }
    if (vpg.recoverySite) {
        sites.push({
            site: vpg.recoverySite as ExtProtectedVmsSite,
            purpose: 'recovery',
        });
    }
    return sites;
};


// info from swagger was incomplete
export interface ExtProtectedVmsSite {
    /** @example Boston */
    name?: string;

    /** @example vCenter */
    type?: string;

    /** @example Protected */
    role?: string;

    identifier?: string;
}

// const getVmsSiteVpg = (vms: Vms, zsiteId: string): ProtectedVpgs | undefined => vms.vpgs!.find(vpg => (vpg.protectedSite as ExtProtectedVmsSite).identifier === zsiteId)


const plannerSitesList = (c: HttpClient, query?: { zorgIdentifier?: string }, params: RequestParams = {}) =>
    c.request<SiteDetails[], Error>({
        path: `/v2/planner/sites`,
        method: "GET",
        query,
        secure: true,
        format: "json",
        ...params,
    });

function getZorgIdentifier(zorg: SupportedZorg | Zorg) {
    return zorg.identifier!
}

function getZsiteIdentifier(site: SiteTopology) {
    return site.identifier!
}

export default class ZertoStore {
    constructor() {

    }
    async load() {
        console.log("zerto store loading")

        const zerto = await createZertoClient(process.env.ZERTO_USERNAME!, process.env.ZERTO_PASSWORD!);

        const zorgsResponse = await zerto.v2.monitoringZorgsList();

        const zorgs = zorgsResponse.data;

        console.log("zorgs count", zorgs.length)

        const zorgIdentifiersByName: Record<string, string> = {};

        for (const zorg of zorgs) {
            const zorgId = getZorgIdentifier(zorg);
            const orgId = companyOrganizationId(zorgId)!;
            let org = await OrganizationEntity.findOneBy({ id: orgId });
            if (!org) {
                org = new OrganizationEntity()
                org.id = orgId;
                org.createdAt = new Date()
            }
            const zorgName = zorg.name || zorgId;
            org.title = zorgName;
            zorgIdentifiersByName[zorgName] = zorgId;
            await org.save();
        }

        console.log('zorgs by name', zorgIdentifiersByName);

        // const zsites = await zerto.v2.monitoringSitesList()
        // console.log('zsites', zsites.data);

        // return;

        const sitesRes = await zerto.v2.monitoringSitesFormatTopologyList()
        // const sitesRes = await plannerSitesList(zerto, {
        //     // zorgIdentifier: zorg.identifier,
        // });
        // const sitesRes = await zerto.v2.monitoringSitesList({});
        const sites = sitesRes.data;
        console.log("zsite count", sites.map(s => s.name))

        for (const zsite of sites) {
            const zsiteIdentifier = getZsiteIdentifier(zsite);
            const siteId = zsiteSiteId(zsiteIdentifier);
            let site = await SiteEntity.findOneBy({ siteId });
            if (!site) {
                site = new SiteEntity()
                site.siteId = siteId;
                site.createdAt = new Date()
            }
            // site.organization = org;
            site.title = zsite.name || zsiteIdentifier;
            site.zertoMeta = zsite;
            await site.save();
            console.log("zsite saved", zsite.identifier, site.title)

            const zsiteOrgs = zsite.zorgs || [];

            for (const zorg of zsiteOrgs) {
                const zorgIdentifer = getZorgIdentifier(zorg);
                const orgId = companyOrganizationId(zorgIdentifer)!;
                let siteOrg = await SiteOrganizationEntity.createQueryBuilder('so').where({
                    siteId,
                    organizationId: orgId,
                }).getOne();
                if (!siteOrg) {
                    siteOrg = new SiteOrganizationEntity();
                    siteOrg.siteOrganizationId = uuid();
                    siteOrg.createdAt = new Date();
                }
                siteOrg.organizationId = orgId;
                siteOrg.siteId = siteId;
                await siteOrg.save();
            }
        }

        const vpgsRes = await zerto.v2.monitoringVpgsList({
            // zorgIdentifier: zorg.identifier
        })
        let vpgs = vpgsRes.data;
        const noContentStatus = 204;
        if (vpgsRes.status == noContentStatus) {
            vpgs = {
                vpgs: []
            };
        }

        console.log('vpgsRes', vpgsRes);

        for (const vpg of (vpgs.vpgs || [])) {
            const vgpIdentifier = vpg.identifier!;
            const protectionId = vpgProtectionId(vgpIdentifier);
            let protection = await ProtectionEntity.findOneBy({ protectionId });
            if (!protection) {
                protection = new ProtectionEntity()
                protection.protectionId = protectionId;
                protection.createdAt = new Date()
            }
            protection.vendor = 'Zerto';
            protection.title = vpg.name || vgpIdentifier;
            protection.zertoMeta = vpg;
            protection.health = inferProtectionHealth(vpg.health);
            await protection.save();
            console.log("vpg saved", protection.title)

            const zorgName = vpg.zorgName || null;

            let organizationId: string | null = null;

            if (zorgName) {
                const zorgIdentifier = zorgIdentifiersByName[zorgName];
                organizationId = companyOrganizationId(zorgIdentifier)
            }

            const allSites = getVPGSites(vpg);

            for (const zsite of allSites) {
                const siteId = zsiteSiteId(zsite.site!.identifier!);
                let protectionSite = await ProtectionSiteEntity.findOneBy({
                    protectionId: protectionId,
                    siteId,
                });
                if (!protectionSite) {
                    protectionSite = new ProtectionSiteEntity()
                    protectionSite.createdAt = new Date()
                }
                protectionSite.siteId = siteId;
                protectionSite.protectionId = protectionId;
                protectionSite.purpose = zsite.purpose;

                protectionSite.organizationId = organizationId;
                await protectionSite.save();

                console.log("protection site saved", protectionSite.protectionId, protectionSite.siteId);
            }
        }

        // console.log("vpgs count", vpgsList.data.vpgs.length);

        // for (const vpg of vpgsList.data.vpgs) {
        //     console.log("vpg item", vpg.name)
        // }

        const vmsRes = await zerto.v2.monitoringProtectedVmsList()

        const vmsList = vmsRes.data as Vms[];
        // console.log("vms", vmsList);

        for (const vms of vmsList) {
            const vmsIdentifier = vms.identifier!
            const assetId = vmsAssetId(vmsIdentifier);
            let asset = await AssetEntity.findOneBy({ assetId });
            if (!asset) {
                asset = new AssetEntity()
                asset.assetId = assetId;
                asset.createdAt = new Date()
            }
            // asset.site = site;
            // asset.organization = org;
            asset.vendor = 'Zerto';
            asset.title = vms.name || vmsIdentifier;
            asset.zertoMeta = vms;
            await asset.save();
            console.log("asset saved", asset.title)

            for (const vpg of (vms.vpgs || [])) {
                const vpgIdentifier = vpg.identifier!
                const protectionId = vpgProtectionId(vpgIdentifier)
                // const protectedSite = vpg.protectedSite as ExtProtectedVmsSite;
                // const recoverySite = vpg.recoverySite as ExtProtectedVmsSite;
                // const allSites = [protectedSite, recoverySite].filter(Boolean);
                const allSites = getVPGSites(vpg);

                for (const zsite of allSites) {
                    console.log("saving vpg site for site", vpg.name, zsite);
                    const siteId = zsiteSiteId(zsite.site!.identifier!);
                    let assetSite = await AssetSiteEntity.findOneBy({
                        siteId: siteId,
                        assetId: assetId,
                    });
                    if (!assetSite) {
                        assetSite = new AssetSiteEntity()
                        assetSite.createdAt = new Date()
                    }
                    assetSite.siteId = siteId;
                    assetSite.assetId = assetId;
                    // assetSite.organization = org;
                    await assetSite.save();

                    console.log("asset site saved", assetSite.assetId, assetSite.siteId);
                }


                let assetProtection = await AssetProtectionEntity.findOneBy({
                    protectionId,
                    assetId,
                });
                if (!assetProtection) {
                    assetProtection = new AssetProtectionEntity()
                    assetProtection.createdAt = new Date()
                    assetProtection.assetProtectionId = assetProtectionId(assetId, protectionId)
                }
                assetProtection.protectionId = protectionId;
                assetProtection.assetId = assetId;
                // assetSite.organization = org;
                await assetProtection.save();
            }
        }

        console.log("zerto store loaded")
    }
}

function inferProtectionHealth(status: VpgHealth | undefined): PropType<ProtectionEntity, 'health'> {
    if (!status) {
        return 'unknown';
    }
    switch (status) {
        case 'Healthy':
            return 'healthy';
        case 'Erroneous':
            return 'erroneous';
        case 'Warned':
            return 'warned';
        default:
            return 'unknown';
    }
}
