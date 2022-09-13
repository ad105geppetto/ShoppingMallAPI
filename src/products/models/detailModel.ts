import { Table, Model, Column, DataType } from "sequelize-typescript"

@Table({
  timestamps: false,
  tableName: "details"
})
export class Details extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  content!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  delivery_fee!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  producer!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  shipping!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  country_of_origin!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  best_by!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  phone_number!: string;

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