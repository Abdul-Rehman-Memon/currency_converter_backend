import express from "express";
import { connectDB } from "./config/mongodb";
import currencyRoutes from "./api/routes/currencyRoutes";

const app = express();

app.use(express.json());
app.use("/api/currency", currencyRoutes);
app.use("/api/history", currencyRoutes);

// Global error handler
app.use(
  (
    err: Error,
    _req: express.Request,
    res: express.Response,
    _next: express.NextFunction
  ) => {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
);

// Initialize DB connection
connectDB().catch((err) => {
  console.error("❌ DB connection failed", err);
  process.exit(1);
});

export default app;
