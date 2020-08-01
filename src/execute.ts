import Listr from 'listr';

import currentBranch from './git/currentBranch';
import checkout from './git/checkout';
import deleteBranch from './git/deleteBranch';
import commitChanges from './git/commit';
import addFiles from './git/addFiles';

const branchName: string = 'segura-branch';
let currentBranchName: string;

const tasks = new Listr (
  [
    {
      title: 'Retriving current branch name',
      task: async (ctx): Promise<any> => {
        currentBranchName = await currentBranch();
      }
    },
    {
      title: 'Creating local branch',
      task: async (ctx): Promise<any> => {
        let checkoutResult = await checkout(branchName);
        if (!checkoutResult) {
          console.log('delete task trigger')
          return deleteSubTask;
          // throw new Error('Branch already exists');
        }
      }
    },
    {
      title: 'Adding all files',
      task: async (ctx): Promise<any> => {
        await addFiles();
      }
    },
    {
      title: 'Committing changes to branch',
      task: async (ctx): Promise<any> => {
        await commitChanges();
      }
    }
  ],
  {
    concurrent: false
  }
);

const deleteSubTask = new Listr (
  [
    {
      title: 'Deleting local branch',
      task: async () => {
        await deleteBranch(branchName);
      }
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
    // console.log(`Process stopped`);
  }
};

export default execute;

