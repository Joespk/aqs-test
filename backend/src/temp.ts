import mongoose, { ConnectOptions, model } from "mongoose";
import { Game24Model } from "./model/game24";
import { Game24Solver } from "./ultis/solver";

mongoose.connect("mongodb://localhost:8001/game24", {
  authSource: "admin",
  user: "root",
  pass: "example",
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions);
mongoose.connection.once("open", async () => {
  console.log("Connected");

  try {
    // สร้างข้อมูลตัวอย่างในฐานข้อมูล
    const numbers = [1, 2, 3, 4];
    const solver = new Game24Solver(numbers);
    const solutions = solver.solve();
    await Game24Model.create({ numbers, solutions });
    console.log("Sample data created:", { numbers, solutions });
  } catch (error) {
    console.error("Error creating sample data:");
  }
});
