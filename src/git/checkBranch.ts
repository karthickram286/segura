import git from './git';
import chalk from 'chalk';
import logSymbols from 'log-symbols';
import { BranchSummary } from 'simple-git';
import { randomFill } from 'crypto';

/**
 * Switched back to the original branch
 */
const checkBranch: any = async (seguraBranch: string) => {
  try {
    let localBranches: BranchSummary = await git.branchLocal();
    for (let branch in localBranches.branches) {
      if (seguraBranch.trim().toLowerCase() === branch.trim().toLowerCase()) {
        return true;
      }
    }
    return false;
    // console.log(chalk.green(`${logSymbols.success} switched back to ${currentBranch}`));
  } catch (error) {
    // console.log(chalk.redBright(`${logSymbols.warning} can't switch back to ${currentBranch}`));
  }
};

export default checkBranch;