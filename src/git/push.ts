import git from './git';

/**
 * Pushes the changes to remote repository with the same branch
 */
const push = async (branchName: string) => {
  try {
    await git.push('origin', branchName);
  } catch (error) {
    throw new Error(`Pushing to remote repository failed: ${error}`);
  }
};

export default push;