import { Orders } from "./models/orderModel";
import { OrderDetails } from "./models/orderDetailModel";
import connection from '../db';

export default {
  setOrder: async (body: any) => {
    await connection.transaction(async (transaction) => {
      await Orders.create(body, { raw: true, transaction });
      await OrderDetails.create(body, { raw: true, transaction });
    }).catch((err) => {
      throw err;
    })
  },
}