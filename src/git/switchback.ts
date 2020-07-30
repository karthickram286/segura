import git from './git';
import chalk from 'chalk';
import logSymbols from 'log-symbols';

/**
 * Switched back to the original branch
 */
const switchBack = async (currentBranch: string) => {
  try {
    await git.checkout(currentBranch);
    console.log(chalk.green(`${logSymbols.success} switched back to ${currentBranch}`));
  } catch (error) {
    console.log(chalk.redBright(`${logSymbols.warning} can't switch back to ${currentBranch}`));
  }
};

export default switchBack;