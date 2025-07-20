import * as Joi from "joi";
import { ConversionRequest } from "../types";

export const conversionSchema = Joi.object<ConversionRequest>({
  base_currency: Joi.string().length(3).uppercase().required(),
  currencies: Joi.string().length(3).uppercase().required(),
  amount: Joi.number().positive().required(),
});
