import { Allow } from "class-validator";
import AssetEntity from "../database/entity/Asset";
import OrganizationEntity from "../database/entity/organization";
import SiteEntity from "../database/entity/site";
import { Api, HttpClient, ProtectedVpgs, RequestParams, SiteDetails, Vms } from "./zerto/zerto-sdk";

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
        baseURL: "https://analytics.api.zerto.com",
        ...createBaseParams(),
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
    return authApi;
};

const companyOrganizationId = (vacCompanyId: string) => `zorg_${vacCompanyId}`;

const zsiteSiteId = (zertoSiteId: string) => `zsite_${zertoSiteId}`;
const vmsAssetId = (vmsId: string) => `zvms_${vmsId}`;

const getVmsSiteVpg = (vms: Vms, zsiteName: string): ProtectedVpgs | undefined => vms.vpgs!.find(vpg => vpg.protectedSite.name === zsiteName)


const plannerSitesList = (c: HttpClient, query?: { zorgIdentifier?: string }, params: RequestParams = {}) =>
    c.request<SiteDetails[], Error>({
        path: `/v2/planner/sites`,
        method: "GET",
        query,
        secure: true,
        format: "json",
        ...params,
    });

export default class ZertoStore {
    constructor() {

    }
    async load() {
        console.log("zerto store loading")

        const zerto = await createZertoClient(process.env.ZERTO_USERNAME, process.env.ZERTO_PASSWORD);

        const zorgsResponse = await zerto.v2.monitoringZorgsList();

        const zorgs = zorgsResponse.data;

        console.log("zorgs count", zorgs.length)

        for (const zorg of zorgs) {
            const orgId = companyOrganizationId(zorg.identifier);
            let org = await OrganizationEntity.findOne(orgId);
            if (!org) {
                org = new OrganizationEntity()
                org.id = orgId;
                org.createdAt = new Date()
            }
            org.title = zorg.name;
            await org.save();

            zerto.v2.monitoringSitesList()

            const sitesRes = await plannerSitesList(zerto, {
                zorgIdentifier: zorg.identifier,
            });
            const sites = sitesRes.data;
            console.log("zorg", zorg.name, " site count", sites.map(s => s.name))

            // const vpgs = await zerto.v2.monitoringVpgsList({
            //     zorgIdentifier: zorg.identifier,
            // })

            const vmsRes = await zerto.v2.monitoringProtectedVmsList()

            const vmsList = vmsRes.data as Vms[];
            // console.log("vms", vmsList);

            for (const zsite of sites) {
                const siteId = zsiteSiteId(zsite.identifier);
                let site = await SiteEntity.findOne(siteId); // HACK: could be overriding organization site belongs to multiple zorgs
                if (!site) {
                    site = new SiteEntity()
                    site.siteId = siteId;
                    site.createdAt = new Date()
                }
                site.organization = org;
                site.title = zsite.name;
                site.zertoMeta = zsite;
                await site.save();
                console.log("site saved", site.title)
                for (const vms of vmsList) {
                    const vpg = getVmsSiteVpg(vms, zsite.name);
                    if (!vpg) {
                        continue
                    }
                    const assetId = vmsAssetId(vms.identifier);
                    let asset = await AssetEntity.findOne(assetId); // HACK: could be overriding vms site belongs to multiple zorgs
                    if (!asset) {
                        asset = new AssetEntity()
                        asset.assetId = assetId;
                        asset.createdAt = new Date()
                    }
                    asset.site = site;
                    asset.organization = org;
                    asset.title = vms.name;
                    asset.zertoMeta = vms;
                    await asset.save();
                    console.log("asset saved", asset.title)
                }
            }
        }


        console.log("zerto store loaded")
    }
}
