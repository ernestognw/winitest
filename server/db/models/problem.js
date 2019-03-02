import mongoose from "mongoose";

const ProblemSchema = new mongoose.Schema({
  content: { type: String, required: true }
});

export default mongoose.model("Problem", ProblemSchema);
