import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { convertCurrency, getCurrencies } from "./src/currency.service";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Currency list endpoint
app.get("/api/currencies", async (_, res) => {
  try {
    const currencies = await getCurrencies();
    res.json(currencies);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch currencies" });
  }
});

// Currency conversion endpoint
app.get("/api/convert", async (req, res) => {
  const { from, to, amount } = req.query;

  if (!from || !to || !amount) {
    return res.status(400).json({ error: "Missing parameters" });
  }

  try {
    const result = await convertCurrency(
      from as string,
      to as string,
      parseFloat(amount as string)
    );
    res.json({ result });
  } catch (error) {
    res.status(500).json({ error: "Conversion failed" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
