import { StatusCodes } from "http-status-codes";

interface NotFoundProduct {
  statusCode: number
}

class NotFoundProduct extends Error {
  constructor() {
    super();
    this.statusCode = StatusCodes.BAD_REQUEST;
    this.message = "해당 제품을 찾을 수 없습니다";
  }
}

export default NotFoundProduct;