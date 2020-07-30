"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const git_1 = __importDefault(require("./git"));
const chalk_1 = __importDefault(require("chalk"));
const log_symbols_1 = __importDefault(require("log-symbols"));
const getCurrentBranch = async () => {
    try {
        let status = await git_1.default.status([]);
        console.log(chalk_1.default.blueBright(`${log_symbols_1.default.info} current branch name: ${status.current}`));
    }
    catch (error) {
        console.log(chalk_1.default.redBright(`${log_symbols_1.default.error} can't retrive the current branch name`));
        process.exit(1);
    }
};
exports.default = getCurrentBranch;
