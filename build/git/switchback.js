"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const git_1 = __importDefault(require("./git"));
const chalk_1 = __importDefault(require("chalk"));
const log_symbols_1 = __importDefault(require("log-symbols"));
/**
 * Switched back to the original branch
 */
const switchBack = async (currentBranch) => {
    try {
        await git_1.default.checkout(currentBranch);
        console.log(chalk_1.default.green(`${log_symbols_1.default.success} switched back to ${currentBranch}`));
    }
    catch (error) {
        console.log(chalk_1.default.redBright(`${log_symbols_1.default.warning} can't switch back to ${currentBranch}`));
    }
};
exports.default = switchBack;
