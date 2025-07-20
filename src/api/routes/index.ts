import currencyRoutes from "./currencyRoutes";
import historyRoutes from "./historyRoutes";

import { Router } from "express";

const router = Router();

router.use("/currency", currencyRoutes);
router.use("/history", historyRoutes);

export default router;
