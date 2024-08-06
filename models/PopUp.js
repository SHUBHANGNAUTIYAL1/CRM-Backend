import mongoose from "mongoose";

const popupSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    contactNumber: {
      type: String,
      required: true,
    },
    occupation: {
      type: String,
      required: true,
    },
    referralSource: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("PopUp", popupSchema);
