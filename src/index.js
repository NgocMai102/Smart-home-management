import express from "express";
import mqtt from "mqtt";
import * as http from "node:http";
import { Server } from "socket.io";
import path from "node:path";
import routes from "./server/routes/index.js";
import {sensorModel} from "./server/models/sensors.model.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use('/', routes);

const mqttClient = mqtt.connect('mqtt://localhost:1883');
mqttClient.on('connect', () => {
    console.log('Connected to MQTT broker');
    mqttClient.subscribe('data/sensor', (err) => {
        if (err) {
            console.log( "Failed to subcribe to topic: ", err);
        }
    });
});

mqttClient.on('message', async (topic, message) => {
    if (topic === 'data/sensor') {
        const getPayloadStr = message.toString();
        console.log(`Received message: ${getPayloadStr}`);

        const sensorData = convertStringToObject(getPayloadStr);
        console.log('payload: ', sensorData);

        io.emit('sensorData', sensorData);
    }
});

app.get('/', (req, res) => {
    console.log("hello, world");
    res.status(200).send('Data received');
});

app.get('/data', async (req, res) => {
    console.log("hello, world");
    res.status(200).send('Data pushed');
})


function convertStringToObject(str) {
    const values = str.split(',');

    return {
        temperature: parseFloat(values[1]),
        humidity: parseFloat(values[2]),
        light: parseFloat(values[3])
    };
}

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
