import service from "./service"
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export default {
  setOrder: async (req: Request, res: Response) => {
    try {
      await service.setOrder(req.body)
      return res.status(StatusCodes.CREATED).json({ message: "success" })
    } catch (error: any) {
      return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).send({
        error: error.message || "Internal Server Error",
      });
    }
  },
}