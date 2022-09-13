import express from 'express'
import connection from './db';
import indexRouter from "./routes";
const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);

connection.sync().then(() => {
  console.log("Database synced successfully")
}).catch((err: Error) => {
  console.log("Error", err)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})