import service from "./service"
import { Request, Response } from "express";

export default {
  getAll: async (req: Request, res: Response) => {
    try {
      const data = await service.getAll()
      return res.json({ data: data, message: "success" })
    } catch (error: any) {
      return res.json({ message: error.message });
    }
  },
  post: (req: Request, res: Response) => {
    service.post(req.body)
    return res.json({ message: "success" })
  }
}