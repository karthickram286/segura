"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const git_1 = __importDefault(require("./git"));
const chalk_1 = __importDefault(require("chalk"));
const log_symbols_1 = __importDefault(require("log-symbols"));
/**
 * Pushes the changes to remote repository with the same branch
 */
const push = async (branchName) => {
    try {
        await git_1.default.push('origin', branchName);
        console.log(chalk_1.default.green(`${log_symbols_1.default.success} pushed to branch ${branchName}`));
    }
    catch (error) {
        console.log(chalk_1.default.redBright(`${log_symbols_1.default.error} can't push the changes`));
        process.exit(1);
    }
};
exports.default = push;
