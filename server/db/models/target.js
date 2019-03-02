import mongoose from "mongoose";

const TargetSchema = new mongoose.Schema({
  content: { type: String, required: true }
});

export default mongoose.model("Target", TargetSchema);
