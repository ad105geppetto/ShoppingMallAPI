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
  },
  getOne: async (req: Request, res: Response) => {
    try {
      const productId = Number(req.params.id)
      const data = await service.getOne(productId)
      return res.status(StatusCodes.OK).json({ data: data, message: "success" })
    } catch (error: any) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
        error: "Internal Server Error",
      });
    }
  },
  patch: async (req: Request, res: Response) => {
    try {
      const productId = Number(req.params.id)
      const data = await service.patch(productId, req.body)
      return res.status(StatusCodes.OK).json({ message: "success" })
    } catch (error: any) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
        error: "Internal Server Error",
      });
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      const productId = Number(req.params.id)
      await service.delete(productId)
      return res.status(StatusCodes.OK).json({ message: "success" })
    } catch (error: any) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
        error: "Internal Server Error",
      });
    }
  },
}