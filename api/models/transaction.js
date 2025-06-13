import mongoose from "mongoose";
const { Schema, model } = mongoose;

const transactionSchema = new Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  desc: { type: String, required: true },
  price: { type: String, required: true },
});

const TransactionModel = model("Transaction", transactionSchema);

export default TransactionModel;
