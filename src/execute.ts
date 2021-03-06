import Listr from 'listr';

import currentBranch from './git/currentBranch';
import checkout from './git/checkout';
import deleteBranch from './git/deleteBranch';
import commitChanges from './git/commit';
import addFiles from './git/addFiles';
import checkBranch from './git/checkBranch';
import push from './git/push';
import switchBack from './git/switchback';

const branchName: string = 'segura-branch';
let currentBranchName: string;
let isBranchExists: boolean = false;

const tasks = new Listr (
  [
    {
      title: 'Retriving current branch name',
      task: async (): Promise<any> => {
        currentBranchName = await currentBranch();
      }
    },
    {
      title: 'Checking local branch',
      task: async (): Promise<any> => {
        isBranchExists =  await checkBranch(branchName);
      }
    },
    {
      title: 'Branch already exists, deleting local branch',
      task: async (): Promise<any> => {
        await deleteBranch(branchName);
      },
      enabled: () => isBranchExists
    },
    {
      title: 'Creating local branch',
      task: async (): Promise<any> => {
        await checkout(branchName);
      }
    },
    {
      title: 'Adding all files',
      task: async (): Promise<any> => {
        await addFiles();
      }
    },
    {
      title: 'Committing changes to branch',
      task: async (): Promise<any> => {
        await commitChanges();
      }
    },
    {
      title: 'Pushing changes to remote branch',
      task: async (): Promise<any> => {
        await push(branchName);
      }
    },
    {
      title: 'Switching back to original branch',
      task: async (): Promise<any> => {
        try {
          await switchBack(currentBranchName);
        } catch (error) {
          console.log(`Changes pushed to remote branch. Not able to switch back to original branch: ${currentBranchName}`);
        }
      },
      enabled: () => true
    }
  ],
  {
    concurrent: false
  }
);

const execute = async () => {
  try {
    await tasks.run();
  } catch (error) {
    console.log(`\nProcess failed`);
  }
};

export default execute;

