import git from './git';
import chalk from 'chalk';
import logSymbols from 'log-symbols';

/**
 * Creates a new local branch to commit all the unsaved changes
 */
const checkoutBranch: any = async (branchName: string) => {
  try {
    await git.checkoutLocalBranch(branchName);
    // console.log(chalk.green(`${logSymbols.success} creating local branch`));
    return true;
  } catch (error) {
    // console.log(chalk.redBright(`${logSymbols.warning} branch already exists`));
    return false;
  }
};

export default checkoutBranch;
