import { Table, Model, Column, DataType } from "sequelize-typescript"

@Table({
  paranoid: true,
  timestamps: true,
  tableName: "detail_images"
})
export class DetailImages extends Model {
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
  image_path!: string;
}