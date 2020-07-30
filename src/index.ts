import checkout from './git/checkout';
import deleteBranch from './git/deleteBranch';
import currentBranch from './git/currentBranch';

const branchName = 'segura-branch';

const segura = async () => {

  const currentBranchName = await currentBranch();

  // If branch already exists deleting the local branch
  await deleteBranch(branchName);

  // Creating a local branch
  let checkoutResult: boolean = await checkout(branchName);

  // switching back to the branch
  // await checkout(currentBranchName);
};

export default segura;