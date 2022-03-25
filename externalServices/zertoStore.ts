import { Allow } from "class-validator";
import OrganizationEntity from "../database/entity/organization";
import SiteEntity from "../database/entity/site";
import { Api } from "./zerto/zerto-sdk";

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

export default class ZertoStore {
    constructor() {

    }
    async load() {
        console.log("zerto store loading")

        const zerto = await createZertoClient(process.env.ZERTO_USERNAME, process.env.ZERTO_PASSWORD);

        const zorgsResponse = await zerto.v2.monitoringZorgsList();

        const zorgs = zorgsResponse.data;

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

            const sites = await zerto.v2.monitoringSitesList({
                zorgIdentifier: zorg.identifier,
            });

            for (const zsite of sites.data) {
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
            }
        }

        const vms = await zerto.v2.monitoringProtectedVmsList()
        // vms.data.vpgs[0].

        console.log("zerto store loaded")
    }
}

// async function loadAllResources<T>(loadPage: (params: { offset: number, limit: number }) => Promise<HttpResponse<{ meta?: ResponseMetadata; data?: T[]; errors?: ResponseError[] }, ErrorResponse>>): Promise<T[]> {
//     let all: T[] = [];
//     while (true) {
//         let offset = all.length;
//         console.log('fetching with offset', offset);
//         const response = await loadPage({
//             limit: 300,
//             offset,
//         });
//         if (response.error) {
//             throw new Error(`failed to fetch page from vac, ${response.error}`);
//         }
//         const result = response.data.data!;
//         if (result.length === 0) {
//             console.log('no more items in result')
//             break;
//         }
//         all = [...all, ...result];
//     }
//     return all;
// }