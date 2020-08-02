import git from './git';
import chalk from 'chalk';
import logSymbols from 'log-symbols';

/**
 * Switched back to the original branch
 */
const switchBack = async (currentBranch: string) => {
  try {
    await git.checkout(currentBranch);
  } catch (error) {
    throw new Error(`Not able to switch back to original branch`);
  }
};

export default switchBack;