import { uuid } from "uuidv4";
import AssetEntity from "../database/entity/Asset";
import ProtectionEntity from "../database/entity/Protection";
import SummaryEntity from "../database/entity/Summary";
import UserEntity from "../database/entity/user"

export const usersSummarize = async () => {
  console.log("summarizer for user starting")

  const allUsers = await UserEntity.createQueryBuilder().getMany();
  for (const user of allUsers) {
    await summarizeForUser(user)
  }
}

const summarizeForUser = async (user: UserEntity) => {
  console.log("summarizing for user", user.userId)
  const summary = new SummaryEntity();
  summary.summaryId = uuid();
  summary.createdAt = new Date();
  // TODO: use user memberships here
  summary.stats = {
    protections: {
      total: await ProtectionEntity.count(),
      generalHealth: {
        healthy: await ProtectionEntity.createQueryBuilder('prot').where({ health: 'healthy' }).getCount(),
        erroneous: await ProtectionEntity.createQueryBuilder('prot').where({ health: 'erroneous' }).getCount()
      }
    },
    assets: {
      total: await AssetEntity.count()
    }
  }

  await summary.save();
  user.summary = summary;
  await user.save();
  console.log("summarized for user", user.userId, summary.stats)
}