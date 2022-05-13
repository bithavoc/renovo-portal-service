import { uuid } from "uuidv4";
import AssetEntity from "../database/entity/Asset";
import AssetProtectionEntity from "../database/entity/AssetProtection";
import AssetSiteEntity from "../database/entity/AssetSite";
import OrganizationEntity from "../database/entity/Organization";
import ProtectionEntity from "../database/entity/Protection";
import ProtectionSiteEntity from "../database/entity/ProtectionSite";
import SiteEntity from "../database/entity/Site";
import SiteOrganizationEntity from "../database/entity/SiteOrganization";
import { assetProtectionId } from "./identifiers";
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
const backupServerJobProtectionId = (jobId: string) => `veeambsj_${jobId}`;
const protectedComputerAssetId = (protectedComputerUid: string) => `veeampc_${protectedComputerUid}`;

export default class VacStore {
    allBackupServerJobs: BackupServerJob[] = [];
    allCompanies: Company[];
    allProtectedVirtualMachines: ProtectedVirtualMachine[];
    allBackupRestorePoints: ProtectedVirtualMachineBackupRestorePoint[];
    allProtectedComputersByBackupServer: ProtectedComputerManagedByBackupServer[];
    allProtectedComputersByConsole: ProtectedComputerManagedByConsole[];
    allLocations: OrganizationLocation[];
    allProtectedComputersManagedByBackupServer: ProtectedComputerManagedByBackupServer[];
    allProtectedComputersManagedByConsole: ProtectedComputerManagedByConsole[];
    constructor() {

    }
    async load() {
        console.log("vac store loading")
        const vac = createVeamClient(process.env.VAC_AT);

        this.allCompanies = await loadAllResources(params => vac.organizations.getCompanies({ ...params }));
        this.allLocations = await loadAllResources(params => vac.organizations.getLocations({ ...params }));
        // this.allProtectedComputersByConsole = await loadAllResources(params => vac.protectedWorkloads.getProtectedComputersManagedByConsole({ ...params }));
        this.allProtectedVirtualMachines = await loadAllResources(params => vac.protectedWorkloads.getProtectedVirtualMachines({ ...params }));
        // const vmBackupJobs = await loadAllResources(params => vac.infrastructure.getBackupServerAgentJobs({ ...params }));

        const backupAgentJobs = await loadAllResources(params => vac.infrastructure.getBackupAgentJobs({ ...params }));
        console.log("backupAgentJobs", backupAgentJobs.length);
        for (const job of backupAgentJobs) {
            console.log("backup agent job", job.name)
        }

        const backupServerJobs = await loadAllResources(params => vac.infrastructure.getBackupServerJobs({ ...params }));
        console.log("backupServerJobs", backupServerJobs.length);

        this.allProtectedComputersManagedByBackupServer = await loadAllResources(params => vac.protectedWorkloads.getProtectedComputersManagedByBackupServer({ ...params }));
        this.allProtectedComputersManagedByConsole = await loadAllResources(params => vac.protectedWorkloads.getProtectedComputersManagedByConsole({ ...params }));
        console.log("allProtectedComputersManagedByConsole", this.allProtectedComputersManagedByConsole.length);

        // return;
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
            const organizationId = org.id;

            console.log("all locations", this.allLocations.length);
            for (const loc of this.allLocations) {
                if (loc.organizationUid !== company.instanceUid) {
                    continue;
                }
                const siteId = locationSiteId(loc.instanceUid);
                let site = await SiteEntity.findOne(siteId);
                if (!site) {
                    site = new SiteEntity()
                    site.createdAt = new Date()
                }
                site.siteId = siteId;
                // site.organization = org;
                site.title = loc.name;
                site.veeamMeta = loc;
                await site.save();
                console.log("site saved", site.title)

                let siteOrg = await SiteOrganizationEntity.createQueryBuilder('so').where({
                    siteId,
                    organizationId,
                }).getOne();
                console.log('site org', siteOrg)
                if (!siteOrg) {
                    siteOrg = new SiteOrganizationEntity();
                    console.log('creating new site org')
                    siteOrg.siteOrganizationId = uuid();
                    siteOrg.createdAt = new Date();
                }
                siteOrg.organizationId = organizationId;
                siteOrg.siteId = siteId;
                await siteOrg.save();

                for (const job of backupServerJobs) {
                    if (job.locationUid != loc.instanceUid) {
                        continue;
                    }
                    const protectionId = backupServerJobProtectionId(job.instanceUid);
                    let protection = await ProtectionEntity.findOne(protectionId);
                    if (!protection) {
                        protection = new ProtectionEntity()
                        protection.protectionId = protectionId;
                        protection.createdAt = new Date()
                    }
                    protection.title = job.name;
                    if (!protection.veeamMeta) {
                        protection.veeamMeta = {}
                    }
                    protection.veeamMeta.backupServerJob = job;
                    await protection.save();
                    console.log("backup server job saved", protection.title)
                    // if (job.name !== 'CollectProd01') {
                    //     console.log("skipped job", job.name)
                    //     continue;
                    // }
                    // const vm = this.allProtectedVirtualMachines.find(vm => vm.name == 'CollectProd01');
                    // console.log("CollectProd01 vm", vm);
                    // console.log("backup server job", job)
                    // if (job.type === 'BackupVm') {
                    //     const objects = await loadAllResources(params => vac.infrastructure.getBackupServerBackupVmJobObjects(job.instanceUid, { ...params }));
                    //     console.log("backup server job objects", objects)

                    //     for (const obj of objects) {
                    //         const vm = this.allProtectedVirtualMachines.find(vm => vm.instanceUid == obj.instanceUid);
                    //         console.log("object vm", vm);
                    //     }
                    // }
                    // return;

                    const siteId = locationSiteId(job.locationUid);
                    let protectionSite = await ProtectionSiteEntity.findOne({
                        protectionId: protectionId,
                        siteId,
                    });
                    if (!protectionSite) {
                        protectionSite = new ProtectionSiteEntity()
                        protectionSite.createdAt = new Date()
                    }
                    protectionSite.siteId = siteId;
                    protectionSite.protectionId = protectionId;
                    protectionSite.purpose = 'protection';
                    await protectionSite.save();

                    console.log("protection site saved", protectionSite.protectionId, protectionSite.siteId);
                }

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
                    // asset.site = site;
                    // asset.organization = org;
                    asset.title = pvm.name;
                    asset.veeamMeta = {
                        vm: pvm,
                    };
                    await asset.save();
                    console.log("asset saved", asset.title)

                    let assetSite = await AssetSiteEntity.findOne({
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

                    const protectionId = backupServerJobProtectionId(pvm.jobUid); // TODO: use other types of jobs

                    const protection = await ProtectionEntity.findOne(protectionId)
                    if (protection) {
                        let assetProtection = await AssetProtectionEntity.findOne({
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
                        await assetProtection.save();
                    } else {
                        console.log("missing protection", pvm.jobUid, "for protected virtual machine", pvm.instanceUid)
                    }
                }

                for (const pvm of this.allProtectedComputersManagedByConsole) {
                    if (pvm.organizationUid !== loc.organizationUid) {
                        continue
                    }
                    const assetId = protectedComputerAssetId(pvm.backupAgentUid);
                    let asset = await AssetEntity.findOne(assetId);
                    if (!asset) {
                        asset = new AssetEntity()
                        asset.assetId = assetId;
                        asset.createdAt = new Date()
                    }
                    // asset.site = site;
                    // asset.organization = org;
                    asset.title = pvm.name;
                    asset.veeamMeta = {
                        vm: pvm,
                    };
                    await asset.save();
                    console.log("allProtectedComputersManagedByConsole asset saved", asset.title, asset.assetId)

                    let assetSite = await AssetSiteEntity.findOne({
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

                    // vac.infrastructure.getBackup

                    // const protectionId = backupServerJobProtectionId(pvm.); // TODO: use other types of jobs

                    // const protection = await ProtectionEntity.findOne(protectionId)
                    // if (protection) {
                    //     let assetProtection = await AssetProtectionEntity.findOne({
                    //         protectionId,
                    //         assetId,
                    //     });
                    //     if (!assetProtection) {
                    //         assetProtection = new AssetProtectionEntity()
                    //         assetProtection.createdAt = new Date()
                    //         assetProtection.assetProtectionId = assetProtectionId(assetId, protectionId)
                    //     }
                    //     assetProtection.protectionId = protectionId;
                    //     assetProtection.assetId = assetId;
                    //     await assetProtection.save();
                    // } else {
                    //     console.log("missing protection", pvm.jobUid, "for protected virtual machine", pvm.instanceUid)
                    // }
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