import mongoose from "mongoose";

const Game24Schema = new mongoose.Schema({
  numbers: [Number],
  solutions: [String],
});

export const Game24Model = mongoose.model("Game24", Game24Schema);
