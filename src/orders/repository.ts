import { Orders } from "./models/orderModel";
import { OrderDetails } from "./models/orderDetailModel";
import connection from '../db';

export default {
  setOrder: async (body: any) => {
    console.log(new Date())
    await connection.transaction(async (transaction) => {
      const detail = await OrderDetails.create(body, { raw: true, transaction });
      const ISOString = detail.createdAt.toISOString()
      const dateString = ISOString.substring(0, 10).split("-").join("")
      const timeString = ISOString.substring(11, ISOString.length - 5).split(":").join("")
      const orderCode = dateString + timeString
      await Orders.create({ order_code: orderCode, order_state: "주문완료", payment_state: "결제진행중", order_detail_id: detail.id }, { raw: true, transaction });
    }).catch((err) => {
      throw err;
    })
  },
}