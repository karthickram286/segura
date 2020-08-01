import git from './git';
import chalk from 'chalk';
import logSymbols from 'log-symbols';

/**
 * Pushes the changes to remote repository with the same branch
 */
const push = async (branchName: string) => {
  try {
    await git.push('origin', branchName);
    // console.log(chalk.green(`${logSymbols.success} pushed to branch ${branchName}`));
  } catch (error) {
    // console.log(chalk.redBright(`${logSymbols.error} can't push the changes`));
    process.exit(1);
  }
};

export default push;