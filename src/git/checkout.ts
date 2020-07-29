import git from './git';
import chalk from 'chalk';
import logSymbols from 'log-symbols';

const branchName = 'segura-branch';

/**
 * Creates a new local branch to commit all the unsaved changes
 */
const checkoutBranch = async () => {
  try {
    await git.checkoutLocalBranch(branchName);
    console.log(chalk.green(`${logSymbols.success} created local branch`));
  } catch (error) {
    console.log(chalk.redBright(`${logSymbols.error} failed to create a local branch`));
    process.exit(1);
  }
};

export default checkoutBranch;
