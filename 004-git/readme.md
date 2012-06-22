#Build Podcast Ep 4 - GIT

[Screencast link ](http://build-podcast.com/git/)

________________


Tools used:

1. [Download](http://git-scm.com/downloads) or [Install](http://git-scm.com/book/en/Getting-Started-Installing-Git) GIT

________________________

Common Git commands:

- `git --version` to know the version of git installed
- `git config --list` to list out all git configurations
- `git config --global user.name "MyName"`, `git config --global color.ui true` and others to set various configuration
- `git config user.name` to get a particulat configuration
- `mate ~/.gitconfig` to open and edit the global gitconfig file with TextMate editor
- `which git` to find out where git is installed
- `git clone <url to copy from> <folder name to copy to>` to get an exact copy of another project
- `git init` to start a versioning of a folder/project of files
- `git status` to see the current status
- `git add .` or `git add <file>` or `git add -p` to stage a particular change
- `git commit -m "commit info"` to commit changes
- `git diff` or `git diff --staged` difference between index and the working directory
- `git branch` to list all branches
    - `git checkout -b <new-branch-name>` to create branch and go into it 
    - `git checkout master` or `git checkout <branch-name>` to go into a branch
    - `git branch -v` to see last commits on each branch
- `git merge <branch-name>` to merge a branch 
    - `git branch --merged` to see branches are already merged into the branch you’re on, you can run
- `git branch -d <branch-name>` to delete a branch
- `git log` to show all previous git versions and commits
    - `git log -2` to show logs for only the last 2 commits
    - `git log --oneline`
    - `git log --oneline --graph`
    - `git log --oneline --graph --all`
    - `git log --oneline --graph --all --decorate`
    - `git log --pretty=oneline` 
    - `git log --pretty=format:"%h - %an, %ar : %s"`
    - `git log --since=2.weeks`
- `git log branchA ^master` what is in branchA that is not yet merged into the master?
- .gitignore to ignore certain files or folder from any versioning
- `git rm <filename>` to remove a file from the versioning
- `git tag` tag specific points in history as important
    - `git tag -a v1.8 -m 'version 1.4'` to make a tag
    - `git show v1.8` to show details of that particular tag
- `git help <verb>` to find out more

More resources:

1. [Main Website ](http://git-scm.com/)
2. [Git book](http://git-scm.com/book)
1. [Introduction to Git by Github](http://learn.github.com/p/intro.html)
1. [Git ready](http://gitready.com/)
1. [Git Immersion](http://gitimmersion.com/)
2. [Introduction to Git video by Scott Chacon from Github](http://www.youtube.com/watch?v=ZDR433b0HJY)
3. [Git reference](http://gitref.org/)
4. [Mastering Git Basics Video by Tom Preston Werner](http://vimeo.com/17118008)
5. [Git Tutorial by Lars Vogel](http://www.vogella.com/articles/Git/article.html)
6. [Git: Tips & Tricks for Ruby Teams](http://www.youtube.com/watch?v=Z2ZL14WWEJI)
7. [Git Manual Page](http://www.kernel.org/pub/software/scm/git/docs/)

________________________

Build Link of this Episode: [Pragmatic Programmers' Free Monthly Magazine](http://pragprog.com/magazines)