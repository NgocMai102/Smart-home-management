import express from "express";
import {deviceController} from "../controllers/devices.controller.js";

const router = express.Router();
router.get("/", deviceController.getAllDevice);
router.get("/search/:name", deviceController.searchDeviceByName);
router.get("/search/:state", deviceController.searchDeviceByState);
router.get("/count/:name/:state", deviceController.countDeviceOnOff);
router.post("/pagination", deviceController.paginationDeviceData);
router.post("/add", deviceController.addDeviceData);

export default router;


