import express from "express";
import controller from "../users/controller";
const router = express.Router();

router.delete("/:id", controller.dropout);
export default router;