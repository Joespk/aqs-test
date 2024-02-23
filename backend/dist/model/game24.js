"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game24Model = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Game24Schema = new mongoose_1.default.Schema({
    numbers: [Number],
    solutions: [String],
});
exports.Game24Model = mongoose_1.default.model("Game24", Game24Schema);
