import express from "express";
import HealthController from "../controllers/health.controller";
import OrderController from "../controllers/order.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new OrderController();
  const response = await controller.getOrders();
  return res.send(response);
});

router.get("/health", async (_req, res) => {
  const controller = new HealthController();
  const response = await controller.getMessage();
  return res.send(response);
});

export default router;
