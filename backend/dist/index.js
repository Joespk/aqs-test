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
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const solver_1 = require("./ultis/solver");
const game24_1 = require("./model/game24");
const app = (0, express_1.default)();
app.use(express_1.default.json());
mongoose_1.default.connect("mongodb://localhost:8001/game24", {
    authSource: "admin",
    user: "root",
    pass: "example",
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose_1.default.connection.once("open", () => {
    console.log("Connected");
});
app.get("/cheat24", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const numbers = req.query.number;
    // ตรวจสอบความถูกต้องของข้อมูล
    if (!numbers || numbers.length !== 4) {
        return res.status(400).send("Invalid request");
    }
    // แปลง string เป็น array of numbers
    const numArray = numbers.split("").map(Number);
    try {
        // ค้นหาใน database
        const game24 = yield game24_1.Game24Model.findOne({ numbers: numArray });
        // ถ้าเจอใน database
        if (game24) {
            return res.send(game24.solutions);
        }
        // ค้นหาคำตอบ
        console.log("Calculating solutions...");
        const solver = new solver_1.Game24Solver(numArray);
        const solutions = solver.solve();
        // บันทึกข้อมูลลง database
        yield game24_1.Game24Model.create({ numbers: numArray, solutions });
        // ส่งคำตอบกลับ
        console.log("Solutions:", solutions);
        res.send(solutions);
    }
    catch (error) {
        console.error("Error processing request:", error);
        res.status(404).send("Not Found solution");
    }
}));
// กำหนด port ในการทำงานของเซิร์ฟเวอร์
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
