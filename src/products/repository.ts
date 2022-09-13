import { Products } from '../products/models/productModel';
import { Details } from '../products/models/detailModel';
import { DetailImages } from '../products/models/detailImageModel';
import { PackageQuantitys } from '../products/models/packageQueatityModel';
import { States } from '../products/models/stateModel';
import connection from '../db';

export default {
  getAll: () => {
    return "hello"
  },
  post: (body: any) => {
    connection.transaction(async (transaction) => {
      await Products.create(body, { raw: true, transaction });
      await Details.create(body, { raw: true, transaction });
      await DetailImages.create(body, { raw: true, transaction });
      await PackageQuantitys.create(body, { raw: true, transaction });
      await States.create(body, { raw: true, transaction });
    }).catch((err) => {
      throw err;
    })
  }
}