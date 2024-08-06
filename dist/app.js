"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const db = require("./config/db");
const body_parser_1 = __importDefault(require("body-parser"));
const personRoute_1 = __importDefault(require("./routes/personRoute"));
app.use(body_parser_1.default.json());
app.get("/", (req, res) => {
    res.send("<h1>Hello all users</h1>");
});
// routes
app.use("/person", personRoute_1.default);
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
