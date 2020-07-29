"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const git_1 = __importDefault(require("./git"));
const chalk_1 = __importDefault(require("chalk"));
const log_symbols_1 = __importDefault(require("log-symbols"));
const branchName = 'segura-branch';
/**
 * Creates a new local branch to commit all the unsaved changes
 */
const checkoutBranch = async () => {
    try {
        await git_1.default.checkoutLocalBranch(branchName);
        console.log(chalk_1.default.green(`${log_symbols_1.default.success} created local branch`));
    }
    catch (error) {
        console.log(chalk_1.default.redBright(`${log_symbols_1.default.error} failed to create a local branch`));
        process.exit(1);
    }
};
exports.default = checkoutBranch;
