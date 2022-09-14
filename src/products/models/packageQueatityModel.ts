import { Table, Model, Column, DataType } from "sequelize-typescript"

@Table({
  paranoid: true,
  timestamps: true,
  tableName: "package_quantitys"
})
export class PackageQuantitys extends Model {
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
  detail_id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  package_quantity!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  price!: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  state_id!: number;
}