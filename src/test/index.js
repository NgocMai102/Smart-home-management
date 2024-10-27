import express from "express";
import pool from "./est.js";
import bodyParser from "body-parser";
import {sensorData, deviceData} from "./service.js";

const app = express();
const port = 3000;

const route1 = express.Router();
const route2 = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

route1.get("/all", async (req, res) => {
    const data = await sensorData.getAllSensorData();
    res.send(data);
});

route1.get("/search", async (req, res) => {
    const data = await sensorData.getSensorDataById(req.params.id);
    res.send(data);
});

route1.get("/pagination", async (req, res) => {
    const data = await sensorData.paginationSensorData(req.params.itemsPerPage, req.params.page);
    res.send(data);
});

route1.post("/add", async (req, res) => {
    const {id, value, date} = req.body;
    await sensorData.insertSensorData(id, value, date);
    res.send("Data inserted successfully");
});

route1.get("/search/temperature/:value", async (req, res) => {
    const data = await sensorData.searchTemperature(req.params.value);
    res.send(data);
});

route1.get("/search/humidity/:value", async (req, res) => {
    const data = await sensorData.searchHumidity(req.params.value);
    res.send(data);
});

route2.get("/all", async (req, res) => {
    const data = await deviceData.getAllDevice();
    res.send(data);
});

route2.get("/search/:id", async (req, res) => {
    const data = await deviceData.getDeviceById(req.params.id);
    res.send(data);
});

route2.get("/pagination/:itemsPerPage/:page", async (req, res) => {
    const data = await deviceData.paginationDeviceData(req.params.itemsPerPage, req.params.page);
    res.send(data);
});

route2.get("filter/:type", async (req, res) => {
    const data = await deviceData.filterDevice(req.params.type);
    res.send(data);
});

route2.get("count/:name/:state", async (req, res) => {
    const data = await deviceData.countDeviceOnOff(req.params.name, req.params.state);
    res.send(data);
});

route2.get("on/:name", async (req, res) => {
    const data = await deviceData.countDeviceOn(req.params.name);
    res.send(data);
});

route2.post("/add", async (req, res) => {
    const {device, state} = req.body;
    await deviceData.insertDeviceData(device, state);

    const data = await deviceData.getLatestDeviceData();
    res.send(data);
});

app.use("/sensor_data", route1);
app.use("/device_data", route2);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

