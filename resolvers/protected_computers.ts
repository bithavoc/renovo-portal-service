import { ForbiddenError } from "apollo-server";
import { Ctx, Field, ID, ObjectType, Query, Resolver } from "type-graphql";
import TokenEntity from "../database/entity/token";
import VacStore from "../externalServices/vacStore";

@ObjectType()
export class ProtectedComputer {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  // @Field()
  // restorePointsTotalSize: number;

  @Field()
  latestRestorePointDate: string;
}

@Resolver(ProtectedComputer)
export default class ProtectedComputersResolver {
  @Query(returns => [ProtectedComputer])
  async getProtectedComputers(
    @Ctx("token") token?: TokenEntity,
    @Ctx("vacStore") vac?: VacStore,
  ): Promise<ProtectedComputer[]> {
    if (!token) {
      throw new ForbiddenError("access denied")
    }
    const brl = vac!.allProtectedComputersByBackupServer.filter(job => token!.user.getVacCompanies().indexOf(job.organizationUid) !== -1);
    const br = brl.map(vm => ({
      id: vm.instanceUid!,
      name: vm.name!,
      // restorePointsTotalSize: vm.totalRestorePointSize,
      latestRestorePointDate: vm.latestRestorePointDate
    }));

    const brc = vac!.allProtectedComputersByConsole.filter(job => token!.user.getVacCompanies().indexOf(job.organizationUid) !== -1);
    const con = brc.map(vm => ({
      id: vm.name!,
      name: vm.name!,
      // restorePointsTotalSize: vm.totalRestorePointSize,
      latestRestorePointDate: vm.latestRestorePointDate
    }));
    return [...br, ...con];
  }
}

