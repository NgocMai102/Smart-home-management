import { sensorService } from '../services/sensors.service.js';




const getAllSensorData = async (req, res) => {
    try {
        const data = await sensorService.getAllSensorData();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const getSensorDataByTime = async (req, res) => {
    try {
        const data = await sensorService.getSensorDataByTime(req.params.time);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const createSensorData = async (req, res) => {
    try {
        const data = await sensorService.createSensorData(req.body.temperature, req.body.humidity, req.body.light);
        res.status(201).json(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const getSensorDataPagination = async (req, res) => {
    try {
        const data = await sensorService.getSensorDataPagination(req.params.itemsPerPage, req.params.page);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export const sensorsController = {
    getAllSensorData,
    getSensorDataByTime,
    createSensorData,
    getSensorDataPagination,
}