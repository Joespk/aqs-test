import mongoose from "mongoose";
import { ConnectOptions } from "mongoose";

const connectDB = async () => {
  mongoose.connect("mongodb://localhost:8001/game24", {
    authSource: "admin",
    user: "root",
    pass: "example",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions);

  mongoose.connection.once("open", () => {
    console.log("Connected");
  });
};
export default connectDB;
