import express from 'express';
const route1 = express.Router();

import router from './sensors.route.js';

route1.use('/sensors', router);

export default route1;