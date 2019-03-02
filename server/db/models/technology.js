import mongoose from "mongoose";

const TechnologySchema = new mongoose.Schema({
  content: { type: String, required: true }
});

export default mongoose.model("Technology", TechnologySchema);
