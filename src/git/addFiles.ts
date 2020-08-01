import git from './git';
import chalk from 'chalk';
import logSymbols from 'log-symbols';

/**
 * Adding all files
 */
const addFiles = async () => {
  try {
    await git.add('./*');
    // console.log(chalk.green(`${logSymbols.success} Added all files ${currentBranch}`));
  } catch (error) {
    // console.log(chalk.redBright(`${logSymbols.warning} Can't add all files ${currentBranch}`));
  }
};

export default addFiles;