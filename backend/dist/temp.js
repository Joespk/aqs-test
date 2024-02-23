"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const game24_1 = require("./model/game24");
const solver_1 = require("./ultis/solver");
mongoose_1.default.connect("mongodb://localhost:8001/game24", {
    authSource: "admin",
    user: "root",
    pass: "example",
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose_1.default.connection.once("open", () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Connected");
    try {
        // สร้างข้อมูลตัวอย่างในฐานข้อมูล
        const numbers = [1, 2, 3, 4];
        const solver = new solver_1.Game24Solver(numbers);
        const solutions = solver.solve();
        yield game24_1.Game24Model.create({ numbers, solutions });
        console.log("Sample data created:", { numbers, solutions });
    }
    catch (error) {
        console.error("Error creating sample data:");
    }
}));
