import git from './git';
import chalk from 'chalk';
import logSymbols from 'log-symbols';

const deleteBranch = async (branchName: string) => {
  try {
    await git.deleteLocalBranch(branchName, true);
    // console.log(chalk.redBright(`${logSymbols.warning} deleting the local branch`));
  } catch (error) {
    // console.log(chalk.greenBright(`${logSymbols.success} local branch doesn't exist`));
  }
};

export default deleteBranch;