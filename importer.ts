import "reflect-metadata";
import { config } from 'dotenv';
import { initDatabase } from "./database";
import VacStore from "./externalServices/vacStore";
import ZertoStore from "./externalServices/zertoStore";
import { usersSummarize } from "./summaries/summarizer";
config();

async function run() {
  console.log("importer starting")
  await initDatabase();

  const vacStore = new VacStore();
  await vacStore.load()

  const zertoStore = new ZertoStore();
  await zertoStore.load();

  await usersSummarize();

  console.log("importer finished")
}

run().then(() => console.log("importer finished ok")).catch(e => {
  console.error("importer failed", e);
  process.exit(1);
});

