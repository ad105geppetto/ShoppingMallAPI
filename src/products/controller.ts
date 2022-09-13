import service from "./service"
import { Request, Response } from "express";

export default {
  get: (req: Request, res: Response) => {
    const data = service.get()
    return res.json({ data: data, message: "success" })
  }
}