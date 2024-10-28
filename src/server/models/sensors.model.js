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

createSensorDataTable();



const getAllSensorData = async () => {
    try{
        const result = await pool.query(`SELECT * FROM sensor_data`);
        return result.rows;
    } catch (error) {
        throw error;
    }
}

const getSensorDataByTime = async (time) => {
    try{
        const result = await pool.query(`SELECT * FROM sensor_data WHERE timestamp LIKE $1%'`, [time]);
        return result.rows;
    } catch (error) {
        throw error;
    }
}

const addSensorData = async (temperature, humidity, light) => {
    try {
        const result = await pool.query(`INSERT INTO sensor_data (temperature, humidity, light) VALUES ($1, $2, $3)`, [temperature, humidity, light]);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
}

const getSensorDataPagination = async (itemsPerPage, page) => {
    try {
        const result = await pool.query(`SELECT * FROM device_data LIMIT $1 OFFSET $2`, [itemsPerPage, (page - 1) * itemsPerPage]);
        return result.rows;
    } catch (error) {
        throw error;
    }
}

const filterTemperatureIncrease = async () => {
    try {
        const result = await pool.query(`SELECT * FROM sensor_data ORDER BY temperature ASC`);
        return result.rows;
    } catch (error) {
        throw error;
    }
}

const filterTemperatureDecrease = async () => {
    try {
        const result = await pool.query(`SELECT * FROM sensor_data ORDER BY temperature DESC`);
        return result.rows;
    } catch (error) {
        throw error;
    }
}

const filterHumidityIncrease = async () => {
    try {
        const result = await pool.query(`SELECT * FROM sensor_data ORDER BY humidity ASC`);
        return result.rows;
    } catch (error) {
        throw error;
    }
}

const filterHumidityDecrease = async () => {
    try {
        const result = await pool.query(`SELECT * FROM sensor_data ORDER BY humidity DESC`);
        return result.rows;
    } catch (error) {
        throw error;
    }
}

const filterLightIncrease = async () => {
    try {
        const result = await pool.query(`SELECT * FROM sensor_data ORDER BY light ASC`);
        return result.rows;
    } catch (error) {
        throw error;
    }
}

const filterLightDecrease = async () => {
    try {
        const result = await pool.query(`SELECT * FROM sensor_data ORDER BY light DESC`);
        return result.rows;
    } catch (error) {
        throw error;
    }
}

export const sensorModel = {
    getAllSensorData,
    getSensorDataByTime,
    addSensorData,
    getSensorDataPagination,
    filterLightIncrease,
    filterLightDecrease,
    filterTemperatureIncrease,
    filterTemperatureDecrease,
    filterHumidityIncrease,
    filterHumidityDecrease
}

//----------------------





