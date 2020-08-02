import git from './git';
import { StatusResult } from 'simple-git';

/**
 * Returns the current branch name
 */
const getCurrentBranch: any = async () => {
  try {
    let status: StatusResult = await git.status([]);
    return status.current;
  } catch (error) {
    throw new Error(`can't retrieve current branch name`);
  }
};

export default getCurrentBranch;