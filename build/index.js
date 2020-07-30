"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const checkout_1 = __importDefault(require("./git/checkout"));
const deleteBranch_1 = __importDefault(require("./git/deleteBranch"));
const currentBranch_1 = __importDefault(require("./git/currentBranch"));
const switchback_1 = __importDefault(require("./git/switchback"));
const commit_1 = __importDefault(require("./git/commit"));
const push_1 = __importDefault(require("./git/push"));
const branchName = 'segura-branch';
const segura = async () => {
    const currentBranchName = await currentBranch_1.default();
    // Creating a local branch
    let checkoutResult = await checkout_1.default(branchName);
    if (!checkoutResult) {
        // If branch already exists deleting the local branch 
        // and then creating the branch
        await deleteBranch_1.default(branchName);
        await checkout_1.default(branchName);
    }
    // commiting all the changes
    await commit_1.default();
    // pushing to remote repo
    await push_1.default(branchName);
    // switching back to the branch
    await switchback_1.default(currentBranchName);
};
exports.default = segura;
