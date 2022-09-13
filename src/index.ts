import express from 'express'
import { sequelize } from './db';
import indexRouter from "./routes";
const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);

sequelize.sync().then(() => {
  console.log("Database synced successfully")
}).catch((err) => {
  console.log("Error", err)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})