import express from "express";
import { connectDB } from "./config/mongodb";
import routes from "./api/routes/index";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", routes);

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
