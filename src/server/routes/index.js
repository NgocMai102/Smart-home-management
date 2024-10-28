import express from "express";
import sensorsRouter from "./sensors.route.js";
import devicesRouter from "./devices.route.js";

const router = express.Router();
router.use("/sensor", sensorsRouter);
router.use("/device", devicesRouter);

export default router;