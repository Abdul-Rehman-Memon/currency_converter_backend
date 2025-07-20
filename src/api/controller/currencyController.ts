import { Request, Response, NextFunction } from "express";
import * as currencyService from "../services/currencyService";
import { conversionSchema } from "../../validation/currencyValidation";

export async function handleConvert(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { error, value } = conversionSchema.validate(req.query);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    const record = await currencyService.convertCurrency(value);
    res.json(record);
  } catch (err) {
    next(err);
  }
}

export const getCurrencies = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const resp = await currencyService.getCurrencyList();
    res.json(resp);
  } catch (err) {
    next(err);
  }
};
