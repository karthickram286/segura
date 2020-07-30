"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const checkout_1 = __importDefault(require("./git/checkout"));
const deleteBranch_1 = __importDefault(require("./git/deleteBranch"));
const currentBranch_1 = __importDefault(require("./git/currentBranch"));
const branchName = 'segura-branch';
const segura = async () => {
    const currentBranchName = await currentBranch_1.default();
    // If branch already exists deleting the local branch
    await deleteBranch_1.default(branchName);
    // Creating a local branch
    let checkoutResult = await checkout_1.default(branchName);
    // switching back to the branch
    // await checkout(currentBranchName);
};
exports.default = segura;
