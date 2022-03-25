import { Allow } from "class-validator";
import AssetEntity from "../database/entity/Asset";
import OrganizationEntity from "../database/entity/organization";
import SiteEntity from "../database/entity/site";
import { Api, BackupServerJob, Company, ErrorResponse, HttpResponse, OrganizationLocation, ProtectedComputerManagedByBackupServer, ProtectedComputerManagedByConsole, ProtectedVirtualMachine, ProtectedVirtualMachineBackupRestorePoint, ResponseError, ResponseMetadata } from "./vac/vac-sdk";

const createVeamClient = (token: string) => new Api({
    baseUrl: "https://vac.renovodata.com/api/v3",
    baseApiParams: {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
});

const companyOrganizationId = (vacCompanyId: string) => `veeamc_${vacCompanyId}`;

const locationSiteId = (locationId: string) => `veeamloc_${locationId}`;
const vmAssetId = (vmInstanceId: string) => `veeamvm_${vmInstanceId}`;

export default class VacStore {
    allBackupServerJobs: BackupServerJob[] = [];
    allCompanies: Company[];
    allProtectedVirtualMachines: ProtectedVirtualMachine[];
    allBackupRestorePoints: ProtectedVirtualMachineBackupRestorePoint[];
    allProtectedComputersByBackupServer: ProtectedComputerManagedByBackupServer[];
    allProtectedComputersByConsole: ProtectedComputerManagedByConsole[];
    allLocations: OrganizationLocation[];
    constructor() {

    }
    async load() {
        console.log("vac store loading")
        const vac = createVeamClient(process.env.VAC_AT);

        this.allCompanies = await loadAllResources(params => vac.organizations.getCompanies({ ...params }));
        this.allLocations = await loadAllResources(params => vac.organizations.getLocations({ ...params }));
        // this.allProtectedComputersByConsole = await loadAllResources(params => vac.protectedWorkloads.getProtectedComputersManagedByConsole({ ...params }));
        this.allProtectedVirtualMachines = await loadAllResources(params => vac.protectedWorkloads.getProtectedVirtualMachines({ ...params }));

        for (const company of this.allCompanies) {
            const orgId = companyOrganizationId(company.instanceUid);
            let org = await OrganizationEntity.findOne(orgId);
            if (!org) {
                org = new OrganizationEntity()
                org.id = orgId;
                org.createdAt = new Date()
            }
            org.title = company.name;
            await org.save();

            console.log("all locations", this.allLocations.length);
            for (const loc of this.allLocations) {
                if (loc.organizationUid !== company.instanceUid) {
                    continue;
                }
                const siteId = locationSiteId(loc.instanceUid);
                let site = await SiteEntity.findOne(siteId);
                if (!site) {
                    site = new SiteEntity()
                    site.siteId = siteId;
                    site.createdAt = new Date()
                }
                site.organization = org;
                site.title = loc.name;
                site.veeamMeta = loc;
                await site.save();
                console.log("site saved", site.title)

                for (const pvm of this.allProtectedVirtualMachines) {
                    if (pvm.organizationUid !== loc.organizationUid) {
                        continue
                    }
                    const assetId = vmAssetId(pvm.instanceUid);
                    let asset = await AssetEntity.findOne(assetId);
                    if (!asset) {
                        asset = new AssetEntity()
                        asset.assetId = assetId;
                        asset.createdAt = new Date()
                    }
                    asset.site = site;
                    asset.organization = org;
                    asset.title = pvm.name;
                    asset.veeamMeta = {
                        vm: pvm,
                    };
                    await asset.save();
                    console.log("asset saved", asset.title)
                }
            }
        }

        // let backupServerJobs: BackupServerJob[] = [];
        // while (true) {
        //     let offset = backupServerJobs.length;
        //     console.log('fetching with offset', offset);
        //     const backupServerJobsRes = await vac.infrastructure.getBackupServerJobs({
        //         limit: 300,
        //         offset,
        //     });
        //     if (backupServerJobsRes.error) {
        //         throw new Error('failed to fetch backup server jobs');
        //     }
        //     const res = backupServerJobsRes.data.data!;
        //     if (res.length === 0) {
        //         console.log('no more items in result')
        //         break;
        //     }
        //     backupServerJobs = [...backupServerJobs, ...res];
        // }
        // this.allBackupServerJobs = await loadAllResources(params => vac.infrastructure.getBackupServerJobs({ ...params }));

        // console.log("all companies", this.allCompanies.length, this.allCompanies.map(c => `${c.instanceUid} - ${c.name}`));


        // this.allProtectedComputersByBackupServer = await loadAllResources(params => vac.protectedWorkloads.getProtectedComputersManagedByBackupServer({ ...params }));
        // console.log("computers b&r", this.allProtectedComputersByBackupServer.length);

        // // const restorePoints = await vac.protectedWorkloads.getProtectedComputersManagedByBackupServerRestorePoints();
        // // restorePoints.data.data[0].
        // // comps[0].
        // // const comps2 = await loadAllResources(params => vac.protectedWorkloads.getProtectedComputersManagedByConsole({ ...params }));
        // // comps[0].
        // const loadAllRestorePoints = async () => {
        //     this.allBackupRestorePoints = [];
        //     for (const vm of this.allProtectedVirtualMachines) {
        //         const vmRestorePoints = await loadAllResources(params => vac.protectedWorkloads.getProtectedVirtualMachineBackupRestorePoints(vm.instanceUid, { ...params }));
        //         this.allBackupRestorePoints = [...this.allBackupRestorePoints, ...vmRestorePoints];
        //         await new Promise((resolve) => setTimeout(resolve, 200));
        //     };
        // };
        // console.log("allProtectedComputersByConsole", this.allProtectedComputersByConsole.length);

        // // vac.protectedWorkloads.getProtectedFileServers()
        // // this.allProtectedComputersByConsole[0].
        // // vac.infrastructure.getBackupAgents()
        // const backupAgents = await loadAllResources(params => vac.infrastructure.getBackupAgents({ ...params }));

        // backupAgents[0].platform
        // vac.protectedWorkloads.agent

        // vac.protectedWorkloads.getProtectedComputersManagedByBackupServerLatestRestorePoints

        // try {
        //     await loadAllRestorePoints();
        // } catch (e) {
        //     console.error('load backup restore points', e);
        // }

        // const allProtectedVirtualMachinesBackups = await loadAllResources(params => vac.protectedWorkloads.getProtectedVirtualMachineBackups({ ...params }));
        // const aceProtectedVirtualMachines = allProtectedBackupServerBackups.filter(b => b.organizationUid === aceCompany.instanceUid);
        // console.log("vac protected virtual machines", aceProtectedVirtualMachines);
        // console.log("vac protected virtual machines", aceProtectedVirtualMachines.length);
        // this.allProtectedVirtualMachines[0].
        // const serverRestorePoints = await loadAllResources(params => vac.protectedWorkloads.getProtectedVirtualMachineBackupRestorePoints({ ...params }));
        // console.log('serverRestorePoints', serverRestorePoints.length);
        // serverRestorePoints[0].
        //allProtectedVirtualMachinesBackups[0].
        // vac.protectedWorkloads.get

        console.log("vac store loaded")
    }
}

async function loadAllResources<T>(loadPage: (params: { offset: number, limit: number }) => Promise<HttpResponse<{ meta?: ResponseMetadata; data?: T[]; errors?: ResponseError[] }, ErrorResponse>>): Promise<T[]> {
    let all: T[] = [];
    while (true) {
        let offset = all.length;
        console.log('fetching with offset', offset);
        const response = await loadPage({
            limit: 300,
            offset,
        });
        if (response.error) {
            throw new Error(`failed to fetch page from vac, ${response.error}`);
        }
        const result = response.data.data!;
        if (result.length === 0) {
            console.log('no more items in result')
            break;
        }
        all = [...all, ...result];
    }
    return all;
}