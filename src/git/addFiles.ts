import git from './git';

/**
 * Adds all uncommitted files
 */
const addFiles = async () => {
  try {
    await git.add('./*');
  } catch (error) {
    throw new Error(`Not able to add all uncommitted files`);
  }
};

export default addFiles;