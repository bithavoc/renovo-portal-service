import { ForbiddenError } from "apollo-server";
import { Ctx, Field, ID, ObjectType, Query, Resolver } from "type-graphql";
import TokenEntity from "../database/entity/token";
import VacStore from "../externalServices/vacStore";

@ObjectType()
export class Protection {
  @Field(type => ID)
  id: string;

  @Field()
  companyName: string;

  @Field()
  name: string;

  @Field()
  type: string;

  @Field()
  backupStore: string;

  @Field()
  subject: string;

  @Field()
  status: string;
}

@Resolver(Protection)
class ProtectionsResolver {
  @Query(returns => [Protection])
  async getProtections(
    @Ctx("token") token?: TokenEntity,
    @Ctx("vacStore") vac?: VacStore,
  ): Promise<Protection[]> {
    if (!token) {
      throw new ForbiddenError("access denied")
    }
    console.log("first", vac!.allBackupServerJobs[1]);
    const allowdBackupServerJobs = vac!.allBackupServerJobs.filter(job => token!.user.getVacCompanies().indexOf(job.organizationUid) !== -1);
    return allowdBackupServerJobs.map(job => ({
      id: job.instanceUid!,
      companyName: '',
      name: job.name!,
      type: "Server Backup",
      backupStore: "Some Backup store",
      subject: "some subject",
      status: job.status,
    }));
  }
}

export default ProtectionsResolver;
