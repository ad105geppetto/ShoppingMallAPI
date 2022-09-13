import express from 'express'
import indexRouter from "./routes";
const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})