import git from './git';

/**
 * Commits all the changes to segura branch
 */
const commitChanges = async () => {
  try {
    await git.commit('commit from segura');
  } catch (error) {
    throw new Error(`Not able to commit the changes`);
  }
};

export default commitChanges;