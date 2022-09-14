import { Table, Model, Column, DataType } from "sequelize-typescript"

@Table({
  paranoid: true,
  timestamps: true,
  tableName: "order_details"
})
export class OrderDetails extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  })
  id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  order_code!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  order_state!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  payment_state!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  order_detail_id!: number;
}