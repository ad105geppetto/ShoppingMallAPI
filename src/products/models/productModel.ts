import { Table, Model, Column, DataType } from "sequelize-typescript"

@Table({
  paranoid: true,
  timestamps: true,
  tableName: "products"
})
export class Products extends Model {
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
  title!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  thumbnail_image_path!: string;
}
