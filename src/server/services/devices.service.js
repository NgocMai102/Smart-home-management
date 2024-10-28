import {deviceModel} from "../models/devices.model.js";

const getAllDevice = async () => {
    try{
        const data = await deviceModel.getAllDevice();
        return data;
    } catch (error) {
        throw error;
    }
}

const searchDeviceByName = async (name) => {
    try{
        const data = await deviceModel.searchDeviceByName(name);
        return data;
    } catch (error) {
        throw error;
    }
}

const searchDeviceByState = async (state) => {
    try{
        const data = await deviceModel.searchDeviceByState(state);
        return data;
    } catch (error) {
        throw error;
    }
}

const countDeviceOnOff = async (name, state) => {
    try{
        const data = await deviceModel.countDeviceOnOff(name, state);
        return data;
    } catch (error) {
        throw error;
    }
}

const paginationDeviceData = async (itemsPerPage, page) => {
    try {
        const data = await deviceModel.paginationDeviceData(itemsPerPage, page);
        return data;
    } catch (error) {
        throw error;
    }
}

const addDeviceData = async (device, state) => {
    try {
        const data = await deviceModel.addDeviceData(device, state);
        return data;
    } catch (error) {
        throw error;
    }
}

export const deviceService = {
    getAllDevice,
    searchDeviceByName,
    searchDeviceByState,
    countDeviceOnOff,
    paginationDeviceData,
    addDeviceData,
}
