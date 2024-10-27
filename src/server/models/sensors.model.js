import pool from './db.js';

export const createSensorDataTable = async () => {
    const query = `CREATE TABLE IF NOT EXISTS sensor_data (
        id SERIAL PRIMARY KEY,
        temperature NUMERIC,
        humidity NUMERIC,
        light NUMERIC,
        timestamp TIMESTAMP DEFAULT NOW()
    )`;
};

export const createDeviceDataTable = async () => {
    const query = `CREATE TABLE IF NOT EXISTS device_data (
        id SERIAL PRIMARY KEY,
        device VARCHAR(255),
        state NUMERIC,
        timestamp TIMESTAMP DEFAULT NOW()
    )`;
}
createSensorDataTable();



const getAllSensorData = async () => {
    try{
        const result = pool.query(`SELECT * FROM sensor_data`);
        console.log(result.rows);
        return await result.rows;
    } catch (error) {
        throw error;
    }
}

const getSensorDataByTime = async (time) => {
    try{
        const result = pool.query(`SELECT * FROM sensor_data WHERE timestamp = $1'`, [time]);
    } catch (error) {
        throw error;
    }
}

const createSensorData = async (temperature, humidity, light) => {
    try {
        const result = pool.query(`INSERT INTO sensor_data (temperature, humidity, light) VALUES ($1, $2, $3)`, [temperature, humidity, light]);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
}

const getSensorDataPagination = async (itemsPerPage, page) => {
    try {
        const result = pool.query(`SELECT * FROM sensor_data LIMIT $1 OFFSET {($2 - 1) * $1}`, [itemsPerPage, page]);
        return result.rows;
    } catch (error) {
        throw error;
    }
}

export const sensorModel = {
    getAllSensorData,
    getSensorDataByTime,
    createSensorData,
    getSensorDataPagination
}

