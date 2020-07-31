import checkout from './git/checkout';
import deleteBranch from './git/deleteBranch';
import currentBranch from './git/currentBranch';
import switchBack from './git/switchback';
import commit from './git/commit';
import push from './git/push';

import execute from './execute';

const segura = async () => {

  await execute();

  // const currentBranchName: string = await currentBranch();

  // // Creating a local branch
  // let checkoutResult: boolean = await checkout(branchName);
  
  // if (!checkoutResult) {
  //   // If branch already exists deleting the local branch 
  //   // and then creating the branch
  //   await deleteBranch(branchName);
  //   await checkout(branchName);
  // }

  // // commiting all the changes
  // await commit();

  // // pushing to remote repo
  // await push(branchName);

  // // switching back to the branch
  // await switchBack(currentBranchName);
};

export default segura;