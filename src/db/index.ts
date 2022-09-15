import { Sequelize } from 'sequelize-typescript';
import { Products } from '../products/models/productModel';
import { Details } from '../products/models/detailModel';
import { DetailImages } from '../products/models/detailImageModel';
import { PackageQuantitys } from '../products/models/packageQueatityModel';
import { States } from '../products/models/stateModel';
import { Grades } from '../users/models/gradeModel';
import { Users } from '../users/models/usersModel';
import { Orders } from '../orders/models/orderModel';
import { OrderDetails } from '../orders/models/orderDetailModel';
import { Payments } from '../orders/models/paymentsModel';
import { config } from './config'

const connection = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: 'mysql',
    logging: false,
    models: [Products, Details, DetailImages, PackageQuantitys, States, Grades, Users, Orders, OrderDetails, Payments]
  }
)

Products.hasOne(Details, { foreignKey: "id" })
Details.belongsTo(Products, { foreignKey: "id" });
Details.hasMany(PackageQuantitys, { foreignKey: "detail_id" })
PackageQuantitys.belongsTo(Details, { foreignKey: "detail_id" })
Details.hasMany(DetailImages, { foreignKey: "detail_id" })
DetailImages.belongsTo(Details, { foreignKey: "detail_id" })
States.hasMany(PackageQuantitys, { foreignKey: 'state_id' })
PackageQuantitys.belongsTo(States, { foreignKey: 'state_id' })

Grades.hasMany(Users, { foreignKey: "grade_id" })
Users.belongsTo(Grades, { foreignKey: "grade_id" })

Users.belongsToMany(Products, { through: Orders, foreignKey: "user_id" })
Products.belongsToMany(Users, { through: Orders, foreignKey: "product_id" })
Orders.hasMany(OrderDetails, { foreignKey: 'order_detail_id' })
OrderDetails.belongsTo(Orders, { foreignKey: 'order_detail_id' })
Orders.hasOne(Payments, { foreignKey: "id" })
Payments.belongsTo(Orders, { foreignKey: "id" })

export default connection