import { Products } from '../products/models/productModel';
import { Details } from '../products/models/detailModel';
import { DetailImages } from '../products/models/detailImageModel';
import { PackageQuantitys } from '../products/models/packageQueatityModel';
import { States } from '../products/models/stateModel';
import connection from '../db';

export default {
  getAll: async () => {
    return await connection.transaction(async (transaction) => {
      const data = await Products.findAll({
        include: [{
          model: Details,
          attributes: {
            exclude: ["createdAt", "updatedAt", "deletedAt"]
          }
        }, {
          model: DetailImages,
          attributes: {
            exclude: ["createdAt", "updatedAt", "deletedAt"]
          }
        }, {
          model: PackageQuantitys,
          attributes: {
            exclude: ["createdAt", "updatedAt", "deletedAt"]
          }
        }, {
          model: States,
          attributes: {
            exclude: ["createdAt", "updatedAt", "deletedAt"]
          }
        }], attributes: {
          exclude: ["createdAt", "updatedAt", "deletedAt"]
        }, raw: true, transaction
      });

      return data
    }).catch((err) => {
      throw err;
    })
  },
  post: async (body: any) => {
    await connection.transaction(async (transaction) => {
      await Products.create(body, { raw: true, transaction });
      await Details.create(body, { raw: true, transaction });
      await DetailImages.create(body, { raw: true, transaction });
      await PackageQuantitys.create(body, { raw: true, transaction });
      await States.create(body, { raw: true, transaction });
    }).catch((err) => {
      throw err;
    })
  },
  getOne: async (productId: number) => {
    return await connection.transaction(async (transaction) => {
      const data = await Products.findOne({
        where: { id: productId },
        include: [{
          model: Details,
          attributes: {
            exclude: ["createdAt", "updatedAt", "deletedAt"]
          }
        }, {
          model: DetailImages,
          attributes: {
            exclude: ["createdAt", "updatedAt", "deletedAt"]
          }
        }, {
          model: PackageQuantitys,
          attributes: {
            exclude: ["createdAt", "updatedAt", "deletedAt"]
          }
        }, {
          model: States,
          attributes: {
            exclude: ["createdAt", "updatedAt", "deletedAt"]
          }
        }], attributes: {
          exclude: ["createdAt", "updatedAt", "deletedAt"]
        }, raw: true, transaction
      });

      return data
    }).catch((err) => {
      throw err;
    })
  },
}