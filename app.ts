import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import routes from "./src/api/routes";
import { connectDB } from "./src/config/mongodb";

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

const startServer = async () => {
  try {
    await connectDB();
    console.log("✅ DB connected successfully");

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ DB connection failed", err);
    process.exit(5);
  }
};

startServer();
