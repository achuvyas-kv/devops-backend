import express from "express";
import OrderRouter from "./order.router";

const router = express.Router();

router.use("/orders", OrderRouter);

export default router;
