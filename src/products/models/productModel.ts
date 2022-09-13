import { Table, Model, Column, DataType } from "sequelize-typescript"

@Table({
  timestamps: true,
  tableName: "products"
})
export class Products extends Model {
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
