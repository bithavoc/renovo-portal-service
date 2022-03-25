import "reflect-metadata";
import { config } from 'dotenv';
import { initDatabase } from "./database";
import VacStore from "./externalServices/vacStore";
import ZertoStore from "./externalServices/zertoStore";
config();

async function run() {
  console.log("importer starting")
  await initDatabase();

  const vacStore = new VacStore();
  await vacStore.load()

  const zertoStore = new ZertoStore();
  await zertoStore.load()

  console.log("importer finished")
}

run();
