import { StatusCodes } from "http-status-codes";

interface NotFoundProduct {
  statusCode: number
}

class NotFoundProduct extends Error {
  constructor() {
    super();
    this.statusCode = StatusCodes.BAD_REQUEST;
    this.message = "상품이 존재하지 않습니다";
  }
}

export default NotFoundProduct;