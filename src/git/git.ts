import simpleGit, { SimpleGit, SimpleGitOptions } from 'simple-git';

const options: SimpleGitOptions = {
  baseDir: process.cwd(),
  binary: 'git',
  maxConcurrentProcesses: 6,
};

const git: SimpleGit = simpleGit(options);

export default git;