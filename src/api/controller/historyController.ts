import { Request, Response, NextFunction } from "express";
import * as historyService from "../services/historyService";

export async function handleHistory(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const history = await historyService.getHistory();
    res.json(history);
  } catch (err) {
    next(err);
  }
}
