import { StatusCodes } from "http-status-codes";

interface NotFoundUser {
  statusCode: number
}

class NotFoundUser extends Error {
  constructor() {
    super();
    this.statusCode = StatusCodes.BAD_REQUEST;
    this.message = "존재하지 않는 유저입니다";
  }
}

export default NotFoundUser;