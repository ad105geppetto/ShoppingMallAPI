import service from "./service"
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export default {
  getAll: async (req: Request, res: Response) => {
    try {
      const data = await service.getAll()
      return res.status(StatusCodes.OK).json({ data: data, message: "success" })
    } catch (error: any) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
        error: "Internal Server Error",
      });
    }
  },
  post: async (req: Request, res: Response) => {
    try {
      service.post(req.body)
      return res.status(StatusCodes.CREATED).json({ message: "success" })
    } catch (error: any) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
        error: "Internal Server Error",
      });
    }
  }
}