import pool from './db.js';

export const createDeviceDataTable = async () => {
    const query = `CREATE TABLE IF NOT EXISTS device_data (
        id SERIAL PRIMARY KEY,
        device VARCHAR(255),
        state NUMERIC,
        timestamp TIMESTAMP DEFAULT NOW()
    )`;
}
createDeviceDataTable();

const getAllDevice = async () => {
    try{
        const result = await pool.query(`SELECT * FROM device_data`);
        return result.rows;
    } catch (error) {
        throw error;
    }
}

const searchDeviceByName = async (name) => {
    try{
        const result = await pool.query(`SELECT * FROM device_data WHERE device = $1`, [name]);
        return result.rows;
    } catch (error) {
        throw error;
    }
}

const searchDeviceByState = async (state) => {
    try{
        const result = await pool.query(`SELECT * FROM device_data WHERE state = $1`, [state]);
        return result.rows;
    } catch (error) {
        throw error;
    }
}

const countDeviceOnOff = async (name, state) => {
    try{
        const result = await pool.query(`SELECT COUNT(*) FROM device_data WHERE device = $1 AND state = $2`, [name, state]);
        return await result.rows;
    } catch (error) {
        throw error;
    }
}

const paginationDeviceData = async (itemsPerPage, page) => {
    try {
        const result = await pool.query(`SELECT * FROM device_data LIMIT $1 OFFSET $2`, [itemsPerPage, (page - 1) * itemsPerPage]);
        return result.rows;
    } catch (error) {
        throw error;
    }
}

const addDeviceData = async (device, state) => {
    try {
        const result = await pool.query(`INSERT INTO device_data (device, state) VALUES ($1, $2)`, [device, state]);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
}

export const deviceModel = {
    getAllDevice,
    searchDeviceByName,
    searchDeviceByState,
    countDeviceOnOff,
    paginationDeviceData,
    addDeviceData
}