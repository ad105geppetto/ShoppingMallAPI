import service from "./service"
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export default {
  signup: async (req: Request, res: Response) => {
    try {
      await service.signup(req.body)
      return res.status(StatusCodes.CREATED).json({ message: "success" })
    } catch (error: any) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
        error: "Internal Server Error",
      });
    }
  },
}