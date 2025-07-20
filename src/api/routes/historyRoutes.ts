import { Router } from "express";
import * as historyController from "../controller/historyController";

const router = Router();
router.get("/", historyController.handleHistory);

export default router;
