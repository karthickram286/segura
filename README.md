<p align="center">
  <img src="segura.png" />
</p>

---

# Segura

[![Build Status](https://travis-ci.com/karthickram286/segura.svg?token=QzM2quCoyhQKHXxybr3h&branch=master)](https://travis-ci.com/karthickram286/segura)  ![GitHub top language](https://img.shields.io/github/languages/top/karthickram286/segura)  ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/karthickram286/segura)


**A CLI tool which helps in pushing uncommitted code in case of emergencies or distress.**

Life is full of uncertainties. If you're a person who don't push your code often, you might be having piles of uncommitted changes in your local. In an emergency situation it's difficult to remember the git commands and push all your changes. Don't end up loosing your code and valuable time and let **segura** help you.

---

### Install

```
# Install segura as a dev dependency
npm i -D segura

# For an emergency push of your code just type "segura" on the command line
segura
```

### How it works

When you enter `segura`
- Creates a local branch `segura-branch`
- Adds all the untracked files and commits to this branch
- Pushes the changes to the remote repo
