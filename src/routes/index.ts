import express from "express";
import productsRouter from "./productsRouter"

const router = express.Router();

router.use("/products", productsRouter);

export default router;