import { Sequelize } from 'sequelize-typescript';
import { Products } from '../products/models/productModel';
import { Details } from '../products/models/detailModel';
import { DetailImages } from '../products/models/detailImageModel';
import { PackageQuantitys } from '../products/models/packageQueatityModel';
import { States } from '../products/models/stateModel';
import { config } from './config'

const connection = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: 'mysql',
    logging: false,
    models: [Products, Details, DetailImages, PackageQuantitys, States]
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

export default connection