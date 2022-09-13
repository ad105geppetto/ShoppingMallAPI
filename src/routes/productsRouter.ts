import express from "express";
import controller from "../products/controller";
const router = express.Router();

router.get("/", controller.getAll);
router.post("/", controller.post);
router.get("/:id", controller.getOne);
export default router;