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
const personModel_1 = __importDefault(require("../models/personModel"));
const router = express_1.default.Router();
//post
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const newPerson = new personModel_1.default(data);
        const response = yield newPerson.save();
        res.status(200).json(response);
    }
    catch (error) {
        console.log(error);
        res.status(500).json("Internal Server Error");
    }
}));
// get
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield personModel_1.default.find();
        res.status(200).json(data);
    }
    catch (error) {
        console.log(error);
        res.status(500).json("Internal Server Error");
    }
}));
// put
router.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const personId = req.params.id;
        const updatePerson = req.body;
        const response = yield personModel_1.default.findByIdAndUpdate(personId, updatePerson, {
            new: true,
            runValidators: true,
        });
        res.status(500).json(response);
    }
    catch (error) {
        console.log(error);
        res.status(500).json("Internal Server Error");
    }
}));
// delete
router.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const personId = req.params.id;
        const response = yield personModel_1.default.findByIdAndDelete(personId);
        if (!response) {
            return res.status(404).json({ error: "Person not found" });
        }
        console.log('data deleted');
        res.status(200).json({ message: "Person deleted successfully" });
    }
    catch (error) {
        console.log(error);
        res.status(500).json("Internal Server Error");
    }
}));
exports.default = router;
