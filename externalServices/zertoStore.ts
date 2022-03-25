import { Allow } from "class-validator";
import OrganizationEntity from "../database/entity/organization";
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
        params: {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
    });
    return authApi;
};

const companyOrganizationId = (vacCompanyId: string) => `zorg_${vacCompanyId}`;

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
        }

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