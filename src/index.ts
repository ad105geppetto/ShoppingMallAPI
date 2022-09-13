import express from 'express'
import connection from './db';
import indexRouter from "./routes";
import { Grades } from './users/models/gradeModel';
const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);

connection.sync({ force: true }).then(async () => {
  console.log("Database synced successfully")
  await Grades.create({ type: "관리자" })
  await Grades.create({ type: "이용자" })
}).catch((err: Error) => {
  console.log("Error", err)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})