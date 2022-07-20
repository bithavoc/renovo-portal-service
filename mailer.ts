import "reflect-metadata";
import { config } from 'dotenv';
import { initDatabase } from "./database";
import { ServerClient } from "postmark";
import UserEntity from "./database/entity/user";
import SummaryEntity from "./database/entity/Summary";
config();

const mailer = new ServerClient(process.env.POSTMARK_TOKEN || '');

async function run() {
  console.log("mailer starting")
  await initDatabase();


  const users = await UserEntity.createQueryBuilder('user').innerJoinAndSelect("user.summary", "summary").getMany();

  for (const user of users) {
    const { summary } = user;
    if (!summary) {
      console.warn('skipping user because it has no summary', user.email);
      continue
    }
    await sendEmail(user, summary);
  }

  console.log("mailer finished")
}

async function sendEmail(user: UserEntity, summary: SummaryEntity) {
  const response = await mailer.sendEmailWithTemplate({
    TemplateAlias: 'summary',
    From: 'summary@app.renovodata.com',
    To: user.email,
    TemplateModel: {
      name: user.firstName,
      healthy_count: summary.stats.protections.generalHealth.healthy,
      healthy_url: 'https://app.renovodata.com/protections?health=healthy&page=1',
      failing_count: summary.stats.protections.generalHealth.erroneous,
      failing_url: 'https://app.renovodata.com/protections?health=erroneous&page=1',
      support_email: 'support@renovodata.com',
      product_name: 'RenovoData',
      company_name: 'RenovoData Protection Services'
    }
  });
  console.log('email sent', user.email, 'message id', response.MessageID)
}

run().then(() => console.log("mailer finished ok")).catch(e => {
  console.error("mailer failed", e);
  process.exit(1);
});

