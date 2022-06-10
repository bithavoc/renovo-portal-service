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
import { Api, BackupAgent, BackupAgentJob, BackupServer, BackupServerAgentJobObject, BackupServerJob, CloudAgent, Company, ErrorResponse, HttpResponse, ManagementAgent, OrganizationLocation, ProtectedComputerManagedByBackupServer, ProtectedComputerManagedByConsole, ProtectedVirtualMachine, ProtectedVirtualMachineBackupRestorePoint, ResponseError, ResponseMetadata } from "./vac/vac-sdk";

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
const backupAgentJobProtectionId = (jobId: string) => `veeambaj_${jobId}`;

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
    allBackupAgentJobs: BackupAgentJob[];
    allBackupAgents: BackupAgent[];
    allBackupServers: BackupServer[];
    allSites: CloudAgent[];
    allBackupServerAgentJobObjects: BackupServerAgentJobObject[];
    allManagementAgents: ManagementAgent[];
    constructor() {

    }
    findBackupAgent(id: string): BackupAgent | undefined {
        return this.allBackupAgents.find(ba => ba.instanceUid == id);
    }
    findBackupAgentJobsOfAgent(agentUid: string): BackupAgentJob[] | undefined {
        return this.allBackupAgentJobs.filter(j => j.backupAgentUid === agentUid);
    }
    findLocation(uid: string): OrganizationLocation | undefined {
        return this.allLocations.find(l => l.instanceUid === uid);
    }
    findCompany(uid: string): Company | undefined {
        return this.allCompanies.find(c => c.instanceUid === uid);
    }
    findManagementAgent(uid: string): ManagementAgent | undefined {
        return this.allManagementAgents.find(c => c.instanceUid === uid);
    }
    findBackupServer(id: string): BackupServer | undefined {
        return this.allBackupServers.find(ba => ba.instanceUid == id);
    }
    findBackupServerJobObjectsWithAgent(agentUid: string): BackupServerAgentJobObject[] | undefined {
        return this.allBackupServerAgentJobObjects.filter(j => j.agentUid === agentUid);
    }
    async load() {
        console.log("vac store loading")
        const vac = createVeamClient(process.env.VAC_AT);
        this.allCompanies = await loadAllResources(params => vac.organizations.getCompanies({ ...params }));
        this.allLocations = await loadAllResources(params => vac.organizations.getLocations({ ...params }));

        this.allManagementAgents = await loadAllResources(params => vac.infrastructure.getManagementAgents({ ...params }));

        this.allBackupAgents = await loadAllResources(params => vac.infrastructure.getBackupAgents({ ...params }));
        console.log("allBackupAgents", this.allBackupAgents.length);

        this.allBackupAgentJobs = await loadAllResources(params => vac.infrastructure.getBackupAgentJobs({ ...params }));
        console.log("backupAgentJobs", this.allBackupAgentJobs.length);

        this.allBackupServerJobs = await loadAllResources(params => vac.infrastructure.getBackupServerJobs({ ...params }));
        console.log("allBackupServerJobs", this.allBackupServerJobs.length);

        this.allBackupServers = await loadAllResources(params => vac.infrastructure.getBackupServers({ ...params }));
        console.log("allBackupServers", this.allBackupServers.length);

        this.allBackupServerAgentJobObjects = await loadAllResources(params => vac.infrastructure.getBackupServerAgentJobsObjects({ ...params }));
        console.log("allBackupServerAgentJobObjects", this.allBackupServerAgentJobObjects.length);

        // for (const agent of this.allBackupAgents) {
        //     console.log("saving backup agent", agent.instanceUid, agent.name, agent.operationMode)
        //     if (agent.instanceUid === '7527b6dd-ffc0-47e9-abcb-b39ca102a5d7') {
        //         console.log("agent", agent);
        //         const jobs = this.findBackupAgentJobsOfAgent(agent.instanceUid);
        //         console.log('jobs', jobs);

        //         const manAgent = await vac.infrastructure.getManagementAgent(agent.managementAgentUid);
        //         console.log('man agent', manAgent);

        //         const location = this.findLocation(manAgent.data.data.locationUid)
        //         console.log('location', location);

        //         const company = this.findCompany(location.organizationUid)
        //         console.log('company', company);

        //         process.exit(1);
        //     }
        // }

        // const agent = await vac.infrastructure.getBackupAgent('60a70bf8-6449-6c66-9cea-b84d9cb9fb7e');
        // console.log("agent", agent, 'vs last from list', last);
        // return;

        this.allSites = await loadAllResources(params => vac.infrastructure.getSites({ ...params }));
        // console.log("all allManagementAgents", this.allManagementAgents);
        console.log("all sites", this.allSites);
        // const backupServers = await loadAllResources(params => vac.infrastructure.getBackupServers({ ...params }));
        // console.log("all backup servers", backupServers);

        this.allProtectedVirtualMachines = await loadAllResources(params => vac.protectedWorkloads.getProtectedVirtualMachines({ ...params }));

        const backupServerJobs = await loadAllResources(params => vac.infrastructure.getBackupServerJobs({ ...params }));
        console.log("backupServerJobs", backupServerJobs.length);

        this.allProtectedComputersManagedByBackupServer = await loadAllResources(params => vac.protectedWorkloads.getProtectedComputersManagedByBackupServer({ ...params }));
        this.allProtectedComputersManagedByConsole = await loadAllResources(params => vac.protectedWorkloads.getProtectedComputersManagedByConsole({ ...params }));
        console.log("allProtectedComputersManagedByBackupServer", this.allProtectedComputersManagedByBackupServer.length);
        console.log("allProtectedComputersManagedByConsole", this.allProtectedComputersManagedByConsole.length);
        for (const loc of this.allLocations) {
            const siteId = locationSiteId(loc.instanceUid);
            let site = await SiteEntity.findOneBy({
                siteId
            });
            if (!site) {
                site = new SiteEntity()
                site.createdAt = new Date()
            }
            site.siteId = siteId;
            site.title = loc.name;
            site.veeamMeta = loc;
            await site.save();
            console.log("site saved", site.title)
        }


        for (const company of this.allCompanies) {
            const orgId = companyOrganizationId(company.instanceUid);
            let org = await OrganizationEntity.findOneBy({ id: orgId });
            if (!org) {
                org = new OrganizationEntity()
                org.id = orgId;
                org.createdAt = new Date()
            }
            org.title = company.name;
            await org.save();
            const organizationId = org.id;

            // for (const agent of this.allBackupAgents) {
            //     console.log("saving backup agent", agent.instanceUid, agent)
            //     if (agent.organizationUid !== company.instanceUid) {
            //         continue;
            //     }
            //     if (agent.instanceUid === '60a70bf8-6449-6c66-9cea-b84d9cb9fb7e') {
            //         console.log('backup agent', agent);
            //         process.exit(1);
            //     }
            // }
            // return;

            for (const job of this.allBackupAgentJobs) {
                console.log("saving backup agent job", job.instanceUid)
                if (job.organizationUid !== company.instanceUid) {
                    continue;
                }
                const { backupAgentUid } = job;
                if (backupAgentUid === '00000000-0000-0000-0000-000000000000') {
                    console.warn("skipped backup agent for job", job.instanceUid, 'because it has no valid agent job');
                    continue;
                }
                // if (backupAgentUid === '29723000-655b-11ea-8000-ac1f6bfe8c10') {
                //     console.log('backup agent job', job);
                //     // const objects = await vac.infrastructure.getBackupAgentJob(job.instanceUid);
                //     // console.log('objects', objects)
                //     process.exit(1);
                // }
                const backupAgent = this.findBackupAgent(backupAgentUid);
                if (!backupAgent) {
                    console.warn("no backup agent for job", job.instanceUid);
                    continue;
                }
                // backupAgent.
                // backupAgent.site
                // totalJobsCount.
                // const backupAgentRes = await vac.infrastructure.getBackupAgent(job.backupAgentUid);
                // const { data: { data: backupAgent } } = backupAgentRes;
                // if (!backupAgentRes) {
                //     console.warn("no backup agent for job", job.instanceUid);
                //     continue;
                // }
                // if (backupAgent. != loc.instanceUid) {
                //     continue;
                // }
                const protectionId = backupAgentJobProtectionId(job.instanceUid);
                let protection = await ProtectionEntity.findOneBy({ protectionId });
                if (!protection) {
                    protection = new ProtectionEntity()
                    protection.protectionId = protectionId;
                    protection.createdAt = new Date()
                }
                console.log("backup agent job to be saved", job, "agent", backupAgent);
                protection.title = job.name || backupAgent.name;
                if (!protection.veeamMeta) {
                    protection.veeamMeta = {}
                }
                protection.veeamMeta.backupAgentJob = job;
                await protection.save();
                console.log("backup agent job saved", protection.title)

                const { managementAgentUid } = backupAgent;

                if (managementAgentUid) {
                    const managementAgent = this.findManagementAgent(managementAgentUid);
                    if (!managementAgent) {
                        console.warn("no management agent for job", job.instanceUid);
                        continue;
                    }
                    const siteId = locationSiteId(managementAgent.locationUid);
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
                    protectionSite.purpose = 'recovery';
                    await protectionSite.save();
                    console.log("protection site saved", protectionSite.protectionId, protectionSite.siteId);
                }
            }

            const locations = this.allLocations.filter(l => l.organizationUid == company.instanceUid);

            console.log("company locations", locations.length);
            for (const loc of locations) {
                const siteId = locationSiteId(loc.instanceUid);
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
                    // if (job.instanceUid === '7ea4e18d-37a5-4758-8884-0552268d084f') {
                    //     console.log("job", job);
                    //     const objects = this.findBackupServerJobObjectsOfAgent(job.instanceUid);
                    //     console.log("objects", objects);
                    //     process.exit(1);
                    // }
                    const protectionId = backupServerJobProtectionId(job.instanceUid);
                    let protection = await ProtectionEntity.findOneBy({ protectionId });
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

                    const siteId = locationSiteId(job.locationUid);
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
                    protectionSite.purpose = 'protection';
                    await protectionSite.save();

                    console.log("protection site saved", protectionSite.protectionId, protectionSite.siteId);
                }


                for (const pvm of this.allProtectedVirtualMachines) {
                    if (pvm.organizationUid !== loc.organizationUid) {
                        continue
                    }
                    const assetId = vmAssetId(pvm.instanceUid);
                    let asset = await AssetEntity.findOneBy({ assetId });
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

                    const protectionId = backupServerJobProtectionId(pvm.jobUid); // TODO: use other types of jobs

                    const protection = await ProtectionEntity.findOneBy({ protectionId })
                    if (protection) {
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
                        await assetProtection.save();
                    } else {
                        console.log("missing protection", pvm.jobUid, "for protected virtual machine", pvm.instanceUid)
                    }
                }

                for (const pvm of this.allProtectedComputersManagedByConsole) {
                    // if (pvm.backupAgentUid === '60a70bf8-6449-6c66-9cea-b84d9cb9fb7e') {
                    //     console.log('pvm WK301', pvm)
                    //     process.exit(1);
                    // }
                    if (pvm.organizationUid !== loc.organizationUid) {
                        continue
                    }
                    const assetId = protectedComputerAssetId(pvm.backupAgentUid);
                    let asset = await AssetEntity.findOneBy({ assetId });
                    if (!asset) {
                        asset = new AssetEntity()
                        asset.assetId = assetId;
                        asset.createdAt = new Date()
                    }
                    asset.title = pvm.name;
                    asset.veeamMeta = {
                        computerByConsole: pvm,
                    };
                    await asset.save();
                    console.log("allProtectedComputersManagedByConsole asset saved", asset.title, asset.assetId)

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
                    await assetSite.save();

                    console.log("asset site saved", assetSite.assetId, assetSite.siteId);


                    const { backupAgentUid } = pvm;
                    if (backupAgentUid) {
                        const backupJobs = this.findBackupAgentJobsOfAgent(backupAgentUid);

                        for (const backupJob of backupJobs) {
                            const backupAgentJobUid = backupJob.instanceUid;
                            const protectionId = backupAgentJobProtectionId(backupAgentJobUid);

                            const protection = await ProtectionEntity.findOneBy({ protectionId })
                            if (protection) {
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
                                await assetProtection.save();
                            } else {
                                console.log("missing protection", backupAgentUid, "for protected virtual machine", pvm.backupAgentUid)
                            }
                        }
                    }
                }// pvm
                for (const pvm of this.allProtectedComputersManagedByBackupServer) {
                    // if (pvm.backupAgentUid === '60a70bf8-6449-6c66-9cea-b84d9cb9fb7e') {
                    //     console.log('pvm WK301', pvm)
                    //     process.exit(1);
                    // }
                    if (pvm.organizationUid !== loc.organizationUid) {
                        continue
                    }
                    const assetId = protectedComputerAssetId(pvm.instanceUid);
                    let asset = await AssetEntity.findOneBy({ assetId });
                    if (!asset) {
                        asset = new AssetEntity()
                        asset.assetId = assetId;
                        asset.createdAt = new Date()
                    }
                    asset.title = pvm.name;
                    asset.veeamMeta = {
                        computerByBackupServer: pvm,
                    };
                    await asset.save();
                    console.log("allProtectedComputersManagedByBackupServer asset saved", asset.title, asset.assetId)

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
                    await assetSite.save();

                    console.log("asset site saved", assetSite.assetId, assetSite.siteId);

                    const { backupServerUid, sourceInstanceUid } = pvm;
                    console.log('backupServerUid', backupServerUid, 'sourceInstanceUid', sourceInstanceUid);
                    if (backupServerUid && sourceInstanceUid) {
                        const backupServer = this.findBackupServer(backupServerUid);
                        const objectsOfAgent = this.findBackupServerJobObjectsWithAgent(sourceInstanceUid);

                        const backupJobs = objectsOfAgent.map(o => o.jobUid);
                        console.log('backupJobs', backupJobs);

                        for (const backupAgentJobUid of backupJobs) {
                            const protectionId = backupServerJobProtectionId(backupAgentJobUid);

                            const protection = await ProtectionEntity.findOneBy({ protectionId })
                            if (protection) {
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
                                await assetProtection.save();
                            } else {
                                console.log("missing protection", backupAgentJobUid, "for protected virtual machine", pvm.instanceUid)
                            }
                        }
                    }
                    // if (pvm.instanceUid === '4c4c4544-0033-4210-804e-b3c04f5a3132') {
                    //     process.exit(1)
                    // }
                }// pvm
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

async function loadAllResources<T>(loadPage: (params: { offset?: number, limit: number }) => Promise<HttpResponse<{ meta?: ResponseMetadata; data?: T[]; errors?: ResponseError[] }, ErrorResponse>>): Promise<T[]> {
    let all: T[] = [];
    let offset: number | undefined;
    while (true) {
        // console.log('fetching with offset', offset);
        const response = await loadPage({
            limit: 100,
            offset,
        });
        if (response.error) {
            throw new Error(`failed to fetch page from vac, ${response.error}`);
        }
        // console.log('response meta', response.data.meta)
        const result = response.data.data!;
        all = [...all, ...result];
        offset = all.length;
        if (result.length === 0) {
            // console.log('no more items in result')
            break;
        }
    }
    return all;
}