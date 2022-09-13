import express from "express";
import controller from "../users/controller";
const router = express.Router();

router.post("/", controller.signup);
export default router;