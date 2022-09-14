import express from "express";
import controller from "../orders/controller";
const router = express.Router();

router.post("/", controller.setOrder);
export default router;