import { Table, Model, Column, DataType } from "sequelize-typescript"

@Table({
  paranoid: true,
  timestamps: true,
  tableName: "orders"
})
export class Orders extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  })
  id!: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  user_id!: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  product_id!: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  quantity!: number;
}