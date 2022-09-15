import { Orders } from "./models/orderModel";
import { OrderDetails } from "./models/orderDetailModel";
import { Payments } from "./models/paymentsModel";
import { PackageQuantitys } from "../products/models/packageQueatityModel";
import connection from '../db';
import { Details } from "../products/models/detailModel";
import NotFoundProduct from "./exception/NotFoundProduct";
import NotFoundDetail from "./exception/NotFoundDetail";

export default {
  setOrder: async (body: any) => {
    await connection.transaction(async (transaction) => {
      const order = await Orders.create(body, { raw: true, transaction });
      const ISOString = order.createdAt.toISOString()
      const dateString = ISOString.substring(0, 10).split("-").join("")
      const timeString = ISOString.substring(11, ISOString.length - 5).split(":").join("")
      const orderCode = dateString + timeString
      const product = await PackageQuantitys.findOne({ where: { detail_id: body.product_id }, raw: true, transaction })
      if (!product) {
        throw new NotFoundProduct();
      }

      const detail = await Details.findOne({ where: { id: product.id }, raw: true, transaction })
      if (!detail) {
        throw new NotFoundDetail();
      }
      const totalPayment = order.quantity * product.price + detail.delivery_fee
      await Payments.create({ payment_code: `zz${orderCode}z`, payment_method: "배송", total_payment_amount: `${totalPayment} 원` }, { raw: true, transaction })
      await OrderDetails.create({ order_code: orderCode, order_state: "주문완료", payment_state: "결제진행중", order_detail_id: order.id }, { raw: true, transaction });
    }).catch((err) => {
      throw err;
    })
  },
}