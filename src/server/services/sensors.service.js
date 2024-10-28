import {sensorModel} from "../models/sensors.model.js";

const getAllSensorData = async () => {
    try {
        const data = await sensorModel.getAllSensorData();
        console.log(data + " sensors.service.js");
        return data;
    } catch (error) {
        throw error;
    }
}

const getSensorDataByTime = async (time) => {
    try {
        const data = await sensorModel.getSensorDataByTime(time);
        return data;
    } catch (error) {
        throw error;
    }
}

const addSensorData = async (temperature, humidity, light) => {
    try {
        const data = await sensorModel.addSensorData(temperature, humidity, light);
        return data;
    } catch (error) {
        throw error;
    }
}

const getSensorDataPagination = async (itemsPerPage, page) => {
    try {
        const data = await sensorModel.getSensorDataPagination(itemsPerPage, page);
        return data;
    } catch (error) {
        throw error;
    }
}

const filterLightIncrease = async () => {
    try {
        const data = await sensorModel.filterLightIncrease();
        return data;
    } catch (error) {
        throw error;
    }
}

const filterLightDecrease = async () => {
    try {
        const data = await sensorModel.filterLightDecrease();
        return data;
    } catch (error) {
        throw error;
    }
}

const filterTemperatureDecrease = async () => {
    try {
        const data = await sensorModel.filterTemperatureDecrease();
        return data;
    } catch (error) {
        throw error;
    }
}

const filterHumidityIncrease = async () => {
    try {
        const data = await sensorModel.filterHumidityIncrease();
        return data;
    } catch (error) {
        throw error;
    }
}

const filterHumidityDecrease = async () => {
    try {
        const data = await sensorModel.filterHumidityDecrease();
        return data;
    } catch (error) {
        throw error;
    }
}

const filterTemperatureIncrease = async () => {
    try {
        const data = await sensorModel.filterTemperatureIncrease();
        return data;
    } catch (error) {
        throw error;
    }
}

export const sensorService = {
    getAllSensorData,
    getSensorDataByTime,
    addSensorData,
    getSensorDataPagination,
    filterLightIncrease,
    filterLightDecrease,
    filterTemperatureDecrease,
    filterHumidityIncrease,
    filterHumidityDecrease,
    filterTemperatureIncrease,
}
