import git from './git';

/**
 * Switches back to the original branch
 */
const switchBack = async (currentBranch: string) => {
  try {
    await git.checkout(currentBranch);
  } catch (error) {
    throw new Error(`Not able to switch back to original branch`);
  }
};

export default switchBack;