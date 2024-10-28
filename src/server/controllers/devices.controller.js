import {deviceService} from "../services/devices.service.js";

const getAllDevice = async (req, res) => {
    try{
        const data = await deviceService.getAllDevice();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const searchDeviceByName = async (req, res) => {
    try{
        const data = await deviceService.searchDeviceByName(req.params.name);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const searchDeviceByState = async (req, res) => {
    try{
        const data = await deviceService.searchDeviceByState(req.params.state);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const countDeviceOnOff = async (req, res) => {
    try{
        const data = await deviceService.countDeviceOnOff(req.params.name, req.params.state);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const paginationDeviceData = async (req, res) => {
    try {
        const data = await deviceService.paginationDeviceData(req.body.itemsPerPage, req.body.page);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const addDeviceData = async (req, res) => {
    try {
        const data = await deviceService.addDeviceData(req.body.device, req.body.state);
        res.status(201).json(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export const deviceController = {
    getAllDevice,
    searchDeviceByName,
    searchDeviceByState,
    countDeviceOnOff,
    paginationDeviceData,
    addDeviceData
}