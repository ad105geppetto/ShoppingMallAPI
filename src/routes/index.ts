import express from "express";
import productsRouter from "./productsRouter"
import signupRouter from "./signupRouter"
import loginRouter from "./loginRouter"
import dropoutRouter from "./dropoutRouter"

const router = express.Router();

router.use("/products", productsRouter);
router.use("/signup", signupRouter);
router.use("/login", loginRouter);
router.use("/dropout", dropoutRouter);

export default router;