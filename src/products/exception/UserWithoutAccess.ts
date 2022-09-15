import { StatusCodes } from "http-status-codes";

interface UserWithoutAccess {
  statusCode: number
}

class UserWithoutAccess extends Error {
  constructor() {
    super();
    this.statusCode = StatusCodes.FORBIDDEN;
    this.message = "접근 권한이 없는 유저입니다";
  }
}

export default UserWithoutAccess;