import { Pool } from 'pg';

const pool = new Pool ({
    host:process.env.HOST || 'localhost',
    user:process.env.USER || 'postgres',
    password:process.env.PASSWORD || 'root',
    database:process.env.DATABASE || 'horseManagement',
    port:process.env.DB_PORT || '5432',
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
});

export default pool;