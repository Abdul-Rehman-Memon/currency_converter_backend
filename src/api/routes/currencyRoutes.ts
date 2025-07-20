import { Router } from "express";
import * as currencyController from "../controller/currencyController";

const router = Router();

router.post("/convert", currencyController.handleConvert);
router.get("/currencies", currencyController.getCurrencies);

export default router;
