import { drizzle } from 'drizzle-orm/node-postgres';

import * as schema from "./schema";

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

export default db;
