import { StatusCodes } from "http-status-codes";

interface NotFoundDetail {
  statusCode: number
}

class NotFoundDetail extends Error {
  constructor() {
    super();
    this.statusCode = StatusCodes.BAD_REQUEST;
    this.message = "상품의 세부 사항이 존재하지 않습니다";
  }
}

export default NotFoundDetail;