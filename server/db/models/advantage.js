import mongoose from "mongoose";

const AdvantageSchema = new mongoose.Schema({
  content: { type: String, required: true }
});

export default mongoose.model("Advantage", AdvantageSchema);
