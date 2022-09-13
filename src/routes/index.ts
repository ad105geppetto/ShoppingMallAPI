import express from "express";
import productsRouter from "./productsRouter"
import signupRouter from "./signupRouter"
import loginRouter from "./loginRouter"
import dropoutRouter from "./dropoutRouter"
import orderRouter from "./orderRouter"

const router = express.Router();

router.use("/products", productsRouter);
router.use("/signup", signupRouter);
router.use("/login", loginRouter);
router.use("/dropout", dropoutRouter);
router.use("/orders", orderRouter);

export default router;