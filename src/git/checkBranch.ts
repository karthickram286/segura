import git from './git';
import { BranchSummary } from 'simple-git';

/**
 * Checks whether 'segura-branch' exists in local
 */
const checkBranch: any = async (seguraBranch: string) => {
  try {
    let localBranches: BranchSummary = await git.branchLocal();
    for (let branch in localBranches.branches) {
      if (seguraBranch.trim().toLowerCase() === branch.trim().toLowerCase()) {
        return true;
      }
    }
    return false;
  } catch (error) {
    throw new Error(`can't check whether ${seguraBranch} exists in local`);
  }
};

export default checkBranch;