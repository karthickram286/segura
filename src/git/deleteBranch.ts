import git from './git';

/**
 * Deletes the local segura-branch
 */
const deleteBranch = async (branchName: string) => {
  try {
    await git.deleteLocalBranch(branchName, true);
  } catch (error) {
    throw new Error(`Not able to delete the local branch - ${branchName}`);
  }
};

export default deleteBranch;