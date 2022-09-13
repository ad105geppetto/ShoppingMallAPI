import express from "express";
import productsRouter from "./productsRouter"
import signupRouter from "./signupRouter"
import login from "./loginRouter"

const router = express.Router();

router.use("/products", productsRouter);
router.use("/signup", signupRouter);
router.use("/login", login);

export default router;