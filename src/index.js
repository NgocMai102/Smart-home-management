import express from "express";
import mqtt from "mqtt";
import * as http from "node:http";
import { Server } from "socket.io";
import path from "node:path";
import routes from "./server/routes/index.js";
import {sensorModel} from "./server/models/sensors.model.js";

const app = express();
const port = 3000;
const mqtt_broker_url = "mqtt://localhost:1883";
const server = http.createServer(app)
const io = new Server(server)

app.use(express.json());
app.use('/', routes);

const mqttClient = mqtt.connect(mqtt_broker_url);
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

app.post("/publish", (req, res) => {
    const { topic, message } = req.body;

    if (!topic || !message) {
        return res.status(400).send("Topic and message are required.");
    }

    mqttClient.publish(topic, message, (err) => {
        if (err) {
            console.log("Failed to publish message:", err);
            res.status(500).send("Failed to publish message.");
        } else {
            console.log(`Published message "${message}" to topic "${topic}"`);
            res.send(`Message "${message}" published to topic "${topic}"`);
        }
    });
});


function convertStringToObject(str) {
    const values = str.split(',');

    return {
        temperature: parseFloat(values[0]),
        humidity: parseFloat(values[1]),
        light: parseFloat(values[2])
    };
}

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
