import { Api, BackupServerJob, Company } from "./vac/vac-sdk";

const createVeamClient = (token: string) => new Api({
    baseUrl: "https://vac.renovodata.com/api/v3",
    baseApiParams: {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
});

export default class VacStore {
    allBackupServerJobs: BackupServerJob[] = [];
    allCompanies: Company[];
    constructor() {

    }
    async load() {
        console.log("vac store loading")
        const vac = createVeamClient(process.env.VAC_AT);
        const companiesRes = await vac.organizations.getCompanies()
        if (companiesRes.error) {
            throw new Error('failed to fetch companies');
        }
        console.log("companies", companiesRes.error, companiesRes.data);

        const companies = companiesRes.data.data!;
        this.allCompanies = companies;
        const aceCompany = companies.find(c => c.name === 'ACE');
        if (!aceCompany) {
            throw new Error('failed to fetch company');
        }

        let backupServerJobs: BackupServerJob[] = [];
        while (true) {
            let offset = backupServerJobs.length;
            console.log('fetching with offset', offset);
            const backupServerJobsRes = await vac.infrastructure.getBackupServerJobs({
                limit: 300,
                offset,
            });
            if (backupServerJobsRes.error) {
                throw new Error('failed to fetch backup server jobs');
            }
            const res = backupServerJobsRes.data.data!;
            if (res.length === 0) {
                console.log('no more items in result')
                break;
            }
            backupServerJobs = [...backupServerJobs, ...res];
        }
        this.allBackupServerJobs = backupServerJobs;

        console.log("vac store loaded")
        console.log("all companies", this.allCompanies.map(c => `${c.instanceUid} - ${c.name}`));
    }
}

