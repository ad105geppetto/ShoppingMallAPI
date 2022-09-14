import { Table, Model, Column, DataType } from "sequelize-typescript"

@Table({
  paranoid: true,
  timestamps: true,
  tableName: "payments"
})
export class Payments extends Model {
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
  payment_code!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  payment_method!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  total_payment_amount!: string;
}