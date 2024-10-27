import pool from "./est.js";

//-------------Sensor Data---------------- (test)

const getAllSensorData = async () => {
    const data = await pool.query(`SELECT * FROM sensor_data`);
    return data.rows;
}

const getSensorDataById = async (id) => {
    const data = await pool.query(`SELECT * FROM sensor_data WHERE id = $1`, [id]);
    return data.rows;
}

const insertSensorData = async (id, value, date) => {
    const result = await pool.query(`INSERT INTO sensor_data (id, value, date) VALUES ($1, $2, $3)`, [id, value, date]);
}

const paginationSensorData = async (itemsPerPage, page) => {
    const result = await pool.query(`SELECT * FROM sensor_data LIMIT $1 OFFSET $2`, [itemsPerPage, (page - 1) * itemsPerPage]);
}


//sắp xếp theo nhiệt độ tăng hoặc giảm dần
const filterTemperature = async () => {
    const data = await pool.query(`SELECT * FROM sensor_data ORDER BY temperature ASC`);
}

const filterHumidity = async (value) => {

}

const filterLight = async (value) => {

}

const searchTemperature = async (value) => {
    const data = await pool.query(`SELECT * FROM sensor_data WHERE temperature = $1`, [value]);
    return data.rows;
}

const searchHumidity = async (value) => {
    const data = await pool.query(`SELECT * FROM sensor_data WHERE humidity = $1`, [value]);
    return data.rows;
}

const searchLight = async (value) => {
    const data = await pool.query(`SELECT * FROM sensor_data WHERE light = $1`, [value]);
    return data.rows;
}




export const sensorData = {
    getAllSensorData,
    getSensorDataById,
    insertSensorData,
    paginationSensorData,
    filterTemperature,
    filterHumidity,
    filterLight,
    searchLight,
    searchHumidity,
    searchTemperature,
}

//-------------Device---------------- (test)

const getAllDevice = async () => {
    const data = await pool.query(`SELECT * FROM device_data`);
    return data.rows;
}

const getDeviceById = async (id) => {
    const data = await pool.query(`SELECT * FROM device_data WHERE id = $1`, [id]);
    return data.rows;
}

//Đếm số lần bật tắt của device tr
const countDeviceOnOff = async (name, state) => {
    const data = await pool.query(`SELECT COUNT(*) FROM device_data WHERE device = $1 AND state = $2` , [name, state]);
    return data.rows;
}

const countDeviceOn = async (name) => {
    const data = await pool.query(`SELECT COUNT(*) FROM device_data WHERE device = $1 AND state = 1`, [name]);
    return data.rows;
}

//Lọc theo device truyền vào
const filterDevice = async (name) => {
    const data = await pool.query(`SELECT * FROM device_data WHERE name = $1`, [name]);
    return data.rows;
}

const paginationDeviceData = async (itemsPerPage, page) => {
    const result = await pool.query(`SELECT * FROM device_data LIMIT $1 OFFSET $2`, [itemsPerPage, (page - 1) * itemsPerPage]);
    return result.rows;
}

const insertDeviceData = async (device, state) => {
    const result = await pool.query(`INSERT INTO device_data (device, state) VALUES ($1, $2)`, [device, state]);
}

const getLatestDeviceData = async () => {
    const data = await pool.query(`SELECT * FROM device_data ORDER BY id DESC LIMIT 1`);
    return data.rows;
}

export const deviceData = {
    getAllDevice,
    getDeviceById,
    countDeviceOnOff,
    filterDevice,
    paginationDeviceData,
    countDeviceOn,
    insertDeviceData,
    getLatestDeviceData,
}