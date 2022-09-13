import { Table, Model, Column, DataType } from "sequelize-typescript"

@Table({
  timestamps: false,
  tableName: "package_quantitys"
})
export class PackageQuantitys extends Model {
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
    type: DataType.STRING,
    allowNull: false
  })
  price!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  state_id!: number;

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