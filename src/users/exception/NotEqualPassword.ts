import { StatusCodes } from "http-status-codes";

interface NotEqualPassword {
  statusCode: number
}

class NotEqualPassword extends Error {
  constructor() {
    super();
    this.statusCode = StatusCodes.BAD_REQUEST;
    this.message = "패스워드가 일치하지 않습니다";
  }
}

export default NotEqualPassword;