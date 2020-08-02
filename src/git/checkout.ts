import git from './git';

/**
 * Creates a new local branch to commit all the unsaved changes
 */
const checkoutBranch: any = async (branchName: string) => {
  try {
    await git.checkoutLocalBranch(branchName);
  } catch (error) {
    throw new Error(`Failed to create local branch - ${branchName}`);
  }
};

export default checkoutBranch;
