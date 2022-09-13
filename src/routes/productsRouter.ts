import express from "express";
import controller from "../products/controller";
const router = express.Router();

router.get("/", controller.getAll);
router.post("/", controller.post);
router.get("/:id", controller.getOne);
router.patch("/:id", controller.patch);
router.delete("/:id", controller.delete);
export default router;