import "reflect-metadata";
import { config } from 'dotenv';
import { initDatabase } from "./database";
import VacStore from "./externalServices/vacStore";
config();

async function run() {
  console.log("importer starting")
  await initDatabase();
  const vacStore = new VacStore();
  await vacStore.load()
  console.log("importer finished")
}

run();
