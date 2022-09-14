import express from 'express'
import connection from './db';
import indexRouter from "./routes";
import { Grades } from './users/models/gradeModel';
import { Users } from './users/models/usersModel';
import { Products } from './products/models/productModel';
const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);

connection.sync({ force: true }).then(async () => {
  console.log("Database synced successfully")
  await Grades.create({ type: "관리자" })
  await Grades.create({ type: "이용자" })
  await Users.create({
    email: "wooyongwoo@naver.com",
    password: "sha123",
    salt: "fdfdfdf",
    grade_id: 1,
    username: "우영우"
  })
  await Products.create({
    title: "싱싱한 자두 1kg/3kg",
    thumbnail_image_path: "http://shopping-mall.com",
  })
}).catch((err: Error) => {
  console.log("Error", err)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})