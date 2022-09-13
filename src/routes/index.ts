import express from "express";
import productsRouter from "./productsRouter"
import usersRouter from "./usersRouter"
import login from "./loginRouter"

const router = express.Router();

router.use("/products", productsRouter);
router.use("/signup", usersRouter);
router.use("/login", login);

export default router;