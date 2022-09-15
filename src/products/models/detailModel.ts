import { Table, Model, Column, DataType } from "sequelize-typescript"

@Table({
  paranoid: true,
  timestamps: true,
  tableName: "details"
})
export class Details extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  content!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  delivery_fee!: number;

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
}