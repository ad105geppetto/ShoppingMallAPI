import { Table, Model, Column, DataType } from "sequelize-typescript"

@Table({
  timestamps: false,
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
