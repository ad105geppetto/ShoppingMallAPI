import { Table, Model, Column, DataType } from "sequelize-typescript"

@Table({
  timestamps: false,
  tableName: "detail_images"
})
export class DetailImages extends Model {
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