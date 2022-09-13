import { Table, Model, Column, DataType } from "sequelize-typescript"

@Table({
  paranoid: true,
  timestamps: true,
  tableName: "grades"
})
export class Grades extends Model {
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
  type!: string;
}