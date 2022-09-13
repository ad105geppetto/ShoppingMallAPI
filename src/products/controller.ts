import service from "./service"
import { Request, Response } from "express";

export default {
  get: (req: Request, res: Response) => {
    return res.json({ message: "success" })
  }
}