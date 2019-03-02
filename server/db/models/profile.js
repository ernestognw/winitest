import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({
  content: { type: String, required: true }
});

export default mongoose.model("Profile", ProfileSchema);
