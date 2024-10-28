import express from "express";
import {sensorsController} from "../controllers/sensors.controller.js";

const router = express.Router();
router.post("/addSensorData", sensorsController.addSensorData);
router.get("/", sensorsController.getAllSensorData);
router.post(/search/, sensorsController.getSensorDataByTime);
router.post("/pagination", sensorsController.paginationSensorData);
router.get("/lightIncrease", sensorsController.filterLightIncrease);
router.get("/lightDecrease", sensorsController.filterLightDecrease);
router.get("/temperatureIncrease", sensorsController.filterTemperatureIncrease);
router.get("/temperatureDecrease", sensorsController.filterTemperatureDecrease);
router.get("/humidityIncrease", sensorsController.filterHumidityIncrease);
router.get("/humidityDecrease", sensorsController.filterHumidityDecrease);

export default router;


