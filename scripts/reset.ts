import "dotenv/config";
import { drizzle } from 'drizzle-orm/node-postgres';

import * as schema from "../db/schema";

import { Pool } from 'pg';

// Configure PostgreSQL client
const pool = new Pool({
  user: process.env.POSTGRESQL_USER,           // PostgreSQL user
  host: process.env.POSTGRESQL_HOST,            // Database host
  database: process.env.POSTGRESQL_DBNAME,    // Database name
  password: process.env.POSTGRESQL_PASSWORD,    // Database password
  port: Number(process.env.POSTGRESQL_PORT),                   // PostgreSQL port
});

// Connect Drizzle to the PostgreSQL client
const db = drizzle(pool, { schema });


const main = async () => {
  try {
    console.log("Resetting the database");

    await db.delete(schema.courses);
    await db.delete(schema.userProgress);
    await db.delete(schema.units);
    await db.delete(schema.lessons);
    await db.delete(schema.challenges);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeProgress);
    await db.delete(schema.userSubscription);

    console.log("Resetting finished");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to reset the database");
  }
};

main();

