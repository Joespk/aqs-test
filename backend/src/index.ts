import express, { Request, Response } from "express";
import { Game24Solver } from "./ultis/solver";
import { Game24Model } from "./model/game24";
import connectDB from "./data/data";

const app = express();
app.use(express.json());

connectDB();

app.get("/game24", async (req: Request, res: Response) => {
  const numbers = req.query.number as string;

  if (!numbers || numbers.length !== 4) {
    return res.status(400).send("Invalid request");
  }

  const numArray = numbers.split("").map(Number);

  try {
    const game24 = await Game24Model.findOne({ numbers: numArray });

    if (game24) {
      return res.send(game24.solutions);
    }

    console.log("Calculating solutions...");
    const solver = new Game24Solver(numArray);
    const solutions = solver.solve();

    await Game24Model.create({ numbers: numArray, solutions });

    console.log("Solutions:", solutions);
    res.send(solutions);
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(404).send("Not Found solution");
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
