import pkg from "pg";
const { Client } = pkg;
import "dotenv/config";

const database = new Client({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

const startDatabase = async () => {
  await database.connect();
  console.log("Database conectada");
};

export { startDatabase, database };
