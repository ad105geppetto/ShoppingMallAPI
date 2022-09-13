import { Sequelize } from 'sequelize-typescript';
import { Products } from '../products/models/productModel';
import { config } from './config'

export const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: 'mysql',
    logging: false,
    models: [Products]
  }
)