import Listr from 'listr';

import currentBranch from './git/currentBranch';

interface ctx {};

const branchName = 'segura-branch';

const tasks = new Listr<ctx> (
  [
    {
      title: 'Retriving current branch name',
      task: async (ctx: any): Promise<void> => {
        await currentBranch(branchName)
      }
    }
  ],
  {
    concurrent: false
  }
)

const execute = async () => {
  await tasks.run();
};

export default execute;