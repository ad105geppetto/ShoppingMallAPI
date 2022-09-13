import { Products } from '../products/models/productModel';
import { Details } from '../products/models/detailModel';
import { DetailImages } from '../products/models/detailImageModel';
import { PackageQuantitys } from '../products/models/packageQueatityModel';
import { States } from '../products/models/stateModel';
import connection from '../db';

export default {
  getAll: async () => {
    const data = await Products.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt"]
      }
    });

    return data
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
  patch: async (productId: number, body: any) => {
    return await connection.transaction(async (transaction) => {
      await Products.update(body, {
        where: { id: productId },
        transaction
      });
      const detail = await Details.update(body, {
        where: { id: productId },
        transaction
      });
      await DetailImages.update(body, {
        where: { detail_id: detail },
        transaction
      });
      await PackageQuantitys.update(body, {
        where: { detail_id: detail },
        transaction
      });

    }).catch((err) => {
      throw err;
    })
  },
  delete: async (productId: number) => {
    return await connection.transaction(async (transaction) => {
      await Products.destroy({
        where: { id: productId },
        transaction,
      });
      await Details.destroy({
        where: { id: productId },
        transaction,
      });
      await DetailImages.destroy({
        where: { detail_id: productId },
        transaction,
      });
      await PackageQuantitys.destroy({
        where: { detail_id: productId },
        transaction,
      });

    }).catch((err) => {
      throw err;
    })
  },
}