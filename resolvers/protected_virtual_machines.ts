import { ForbiddenError } from "apollo-server";
import { Ctx, Field, ID, ObjectType, Query, Resolver } from "type-graphql";
import TokenEntity from "../database/entity/token";
import VacStore from "../externalServices/vacStore";

@ObjectType()
export class ProtectedVirtualMachine {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  restorePointsTotalSize: number;

  @Field()
  latestRestorePointDate: string;
}

@Resolver(ProtectedVirtualMachine)
class ProtectedVirtualMachinesResolver {
  @Query(returns => [ProtectedVirtualMachine])
  async getProtectedVirtualMachines(
    @Ctx("token") token?: TokenEntity,
    @Ctx("vacStore") vac?: VacStore,
  ): Promise<ProtectedVirtualMachine[]> {
    if (!token) {
      throw new ForbiddenError("access denied")
    }
    const vms = vac!.allProtectedVirtualMachines.filter(job => token!.user.getVacCompanies().indexOf(job.organizationUid) !== -1);
    return vms.map(vm => ({
      id: vm.instanceUid!,
      name: vm.name!,
      restorePointsTotalSize: vm.totalRestorePointSize,
      latestRestorePointDate: vm.latestRestorePointDate
    }));
  }
}

export default ProtectedVirtualMachinesResolver;
