import mongoose from "mongoose";

const IndustrySchema = new mongoose.Schema({
  content: { type: String, required: true }
});

export default mongoose.model("Industry", IndustrySchema);
