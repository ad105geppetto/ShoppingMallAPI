import service from "./service"
import { Request, Response } from "express";

export default {
  getAll: (req: Request, res: Response) => {
    const data = service.getAll()
    return res.json({ data: data, message: "success" })
  },
  post: (req: Request, res: Response) => {
    service.post(req.body)
    return res.json({ message: "success" })
  }
}