"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const checkout_1 = __importDefault(require("./git/checkout"));
const segura = async () => {
    // Creating a local branch
    await checkout_1.default();
};
exports.default = segura;
