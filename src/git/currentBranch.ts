import git from './git';
import chalk from 'chalk';
import logSymbols from 'log-symbols';
import { StatusResult } from 'simple-git';

const getCurrentBranch: any = async () => {
  try {
    let status: StatusResult = await git.status([]);
    console.log(chalk.blueBright(`${logSymbols.info} current branch name: ${status.current}`));
    return status.current;
  } catch (error) {
    console.log(chalk.redBright(`${logSymbols.error} can't retrive the current branch name`));
    process.exit(1);
  }
};

export default getCurrentBranch;