import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "data_iot",
    password: "admin",
    port: 5432,
});

pool.on('connect', () => {
    console.log('connected to the db');
});

pool.on('error', (err) => {
    console.error('Unexpected error on idle client', err);
    process.exit(-1);
});

export default pool;

