import express from 'express';
import mqtt from 'mqtt';

const app = express();
const port = 3000;
const broker_ip_address = '';

const client = mqtt.connect('mqtt://broker_ip_address');

// Variables to store sensor data
let temperature: number;
let humidity: number;
let light: number;

client.on('connect', () => {
    console.log('Connected to MQTT broker');
    client.subscribe('esp32/sensor/#', (err) => {
        if (!err) {
            console.log('Subscribed to topics');
        }
    });
});

client.on('message', (topic, message) => {
    const payload = message.toString();

    if (topic === 'esp32/sensor/temperature') {
        temperature = parseFloat(payload.split(':')[1]);
    } else if (topic === 'esp32/sensor/humidity') {
        humidity = parseFloat(payload.split(':')[1]);
    } else if (topic === 'esp32/sensor/light') {
        light = parseFloat(payload.split(':')[1]);
    }
});

app.get('/sensor-data', (req, res) => {
    res.json({
        temperature,
        humidity,
        light
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
