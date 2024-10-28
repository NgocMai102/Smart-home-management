import { sensorService } from '../services/sensors.service.js';

const getAllSensorData = async (req, res) => {
    try {
        const data = await sensorService.getAllSensorData();
        res.status(200).json(data);
        console.log(data + "sensors.controller.js");
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

const addSensorData = async (req, res) => {
    try {
        const data = await sensorService.addSensorData(req.body.temperature, req.body.humidity, req.body.light);
        res.status(201).json(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const paginationSensorData = async (req, res) => {
    try {
        const data = await sensorService.getSensorDataPagination(req.body.itemsPerPage, req.body.page);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const filterLightIncrease = async (req, res) => {
    try {
        const data = await sensorService.filterLightIncrease();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const filterLightDecrease = async (req, res) => {
    try {
        const data = await sensorService.filterLightDecrease();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const filterTemperatureIncrease = async (req, res) => {
    try {
        const data = await sensorService.filterTemperatureIncrease();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const filterTemperatureDecrease = async (req, res) => {
    try {
        const data = await sensorService.filterTemperatureDecrease();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const filterHumidityIncrease = async (req, res) => {
    try {
        const data = await sensorService.filterHumidityIncrease();
        res.status(200).json(data);

    } catch (error) {
        res.status(500).send(error.message);
    }
}

const filterHumidityDecrease = async (req, res) => {
    try {
        const data = await sensorService.filterHumidityDecrease();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export const sensorsController = {
    getAllSensorData,
    getSensorDataByTime,
    addSensorData,
    paginationSensorData,
    filterLightIncrease,
    filterLightDecrease,
    filterTemperatureIncrease,
    filterTemperatureDecrease,
    filterHumidityIncrease,
    filterHumidityDecrease,
}