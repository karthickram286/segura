import git from './git';
import chalk from 'chalk';
import logSymbols from 'log-symbols';

/**
 * Commits all the changes to segura branch
 */
const commitChanges = async () => {
  try {
    await git.commit('commit from segura');
    console.log(chalk.green(
      `${logSymbols.success} changes committed`
    ));
  } catch (error) {
    console.log(chalk.redBright(`${logSymbols.error} can't commit the changes`));
    process.exit(1);
  }
};

export default commitChanges;