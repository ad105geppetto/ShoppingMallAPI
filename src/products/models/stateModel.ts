import { Table, Model, Column, DataType } from "sequelize-typescript"

@Table({
  timestamps: false,
  tableName: "states"
})
export class States extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  type!: string;

  @Column({
    type: DataType.DATE,
    allowNull: false
  })
  created_at!: string;

  @Column({
    type: DataType.DATE,
    allowNull: false
  })
  updated_at!: string;

  @Column({
    type: DataType.DATE,
    allowNull: false
  })
  deleted_at!: string;
}