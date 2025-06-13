import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Transaction from "./models/transaction.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error", err));

app.get("/api/test", (req, res) => {
  res.json({ body: "TEST2" });
});

app.post("/api/transactions", async (req, res) => {
  const { name, date, desc, price } = req.body;

  try {
    const transaction = await Transaction.create({ name, date, desc, price });
    res.json(transaction);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get("/api/transactions", async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3020, () => {
  console.log("✅ Server running on http://localhost:3020");
});
