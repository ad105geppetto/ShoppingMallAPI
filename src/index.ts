import express from 'express'
import connection from './db';
import indexRouter from "./routes";
import { Grades } from './users/models/gradeModel';
import { Users } from './users/models/usersModel';
import { Products } from './products/models/productModel';
import { Details } from "./products/models/detailModel"
import { DetailImages } from './products/models/detailImageModel';
import { PackageQuantitys } from './products/models/packageQueatityModel';
const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", indexRouter);

connection.sync({ force: true }).then(async () => {
  console.log("Database synced successfully")
  await Grades.create({ type: "관리자" })
  await Grades.create({ type: "이용자" })
  await Users.create({
    email: "wooyongwoo@naver.com",
    password: "SWyaj00IrujlgX+e6yJjfWtrQ8aEHHViXEi+CQIDzFyK93V3YPMtcvqP4AGDTmfQmlw4j7tah2s3+WY8oj8dwQ==",
    salt: "0ckIZoi6H6fEZxpp9/od+KcBmDDj5mmTz+ZH7JUEzb70+bnoyHh9ZxOuOQF2IubNByCu5LoMzGfTBrh1DbCicQ==",
    grade_id: 1,
    username: "우영우"
  })
  await Products.create({
    title: "싱싱한 자두 1kg/3kg",
    thumbnail_image_path: "http://shopping-mall.com",
  })
  await Details.create({
    content: "싱싱한 자두 1kg/3kg",
    delivery_fee: 3000,
    producer: "마트",
    shipping: "배송",
    country_of_origin: "한국",
    best_by: "2022-11-22",
    phone_number: "010-0000-0000"
  })
  await DetailImages.create({
    detail_id: 1,
    image_path: "http://shopping-mall.com/public/image/iiddoddod",
  })
  await PackageQuantitys.create({
    detail_id: 1,
    package_quantity: "1kg",
    price: 10000
  })
}).catch((err: Error) => {
  console.log("Error", err)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})