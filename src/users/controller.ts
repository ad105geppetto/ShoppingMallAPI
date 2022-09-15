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
  login: async (req: Request, res: Response) => {
    try {
      const data = await service.login(req.body)
      return res.status(StatusCodes.OK).json({ data: data, message: "success" })
    } catch (error: any) {
      return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).send({
        error: error.message || "Internal Server Error",
      });
    }
  },
  dropout: async (req: Request, res: Response) => {
    try {
      const userId = Number(req.params.id);
      const data = await service.dropout(userId)
      return res.status(StatusCodes.OK).json({ data: data, message: "success" })
    } catch (error: any) {
      return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).send({
        error: error.message || "Internal Server Error",
      });
    }
  },
}