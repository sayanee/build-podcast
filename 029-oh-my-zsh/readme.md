#Build Podcast Ep 29 - Oh MY ZSH
[Screencast link](http://build-podcast.com/oh-my-zsh/)

[Oh My ZSH](https://github.com/robbyrussell/oh-my-zsh) is a community driven project for managing zsh configuration. We will explore some functions of [z-shell](http://en.wikipedia.org/wiki/Z_shell) (zsh), [iTerm](http://www.iterm2.com/#/section/home) and Oh My ZSH so that we can get to be a little more productive in our daily coding hours!

#Background on Oh My Zsh

1. Oh My ZSH [main website](https://github.com/robbyrussell/oh-my-zsh), [twitter](http://twitter.com/ohmyzsh) - top [forked](https://github.com/popular/forked) or [starred](https://github.com/popular/starred) project in github
2. [iTerm](http://www.iterm2.com/#/section/home) and its [features](http://www.iterm2.com/#/section/features), [wiki](http://code.google.com/p/iterm2/w/list)
3. [zsh](http://en.wikipedia.org/wiki/Z_shell)


#Things to learn with Oh My ZSH

###1. iTerm

- `ctrl + cmd + t` to hide and show terminal
-  **tabs**: 
    -  new tab: `cmd + t`
    - toggle through tabs: `shift + cmd + [` or `shift + cmd + ]`
- **panes**:
    - new pane: `shift + opt + cmd + v` for vertical or `shift + opt + cmd + h` for horizontal pane
    - toggle through panes: `cmd + [` or `cmd + ]`
    - switch pane with mouse: Preference > Pointer > Miscellaneous Setting > Focus follows Mouse
- search with `cmd + f` and `opt + enter` to copy to clipboard
- automcomplete for commands in history with `cmd + ;`

###2. zsh

1. change to zsh in iTerm: Preference > Profiles > General > Command > choose Command > `/bin/zsh`
2. `ps -ef|grep $$|grep -v grep` will look for current process ID in the list of current running processes - zsh in this case
3. spelling check
4. globbping - selecting files marching a pattern. E.g. to read all the `readme.md` files in the [build podcast repo](https://github.com/sayanee/Build-Podcast): `ls ~/Sites/build-podcast/**/*.md`

###3. oh my zsh

1. copy bash profile settings in file `~/.bash_profile`

#More Resources on Iterm, Oh-My-ZSH, Zsh

- [how to determine which shell am i working on?](http://stackoverflow.com/questions/3327013/how-to-determine-the-current-shell-im-working-on)

###1. iterm

1. [Working effectively with iTerm2](http://teohm.github.com/blog/2012/03/22/working-effectively-with-iterm2/)
2. [iTerm2, the successor to Terminal](http://www.astrobetter.com/iterm2-the-successor-to-the-terminal-on-osx/)

###2. zsh

1. [zsh - the last shell you will ever need](http://friedcpu.wordpress.com/2007/07/24/zsh-the-last-shell-youll-ever-need/)
2. [user's guide to zsh](http://zsh.sourceforge.net/Guide/)

###3. oh my zsh

1. [podcast with Robby Russell, the creator](http://thechangelog.com/post/5875746546/episode-0-6-1-oh-my-zsh-with-robby-russell)
2. [podcast by Ryan Bates](http://railscasts.com/episodes/308-oh-my-zsh) - learn how to make plugins
3. [zsh lovers](http://grml.org/zsh/zsh-lovers.html)
4. official list of [plugins](https://github.com/robbyrussell/oh-my-zsh/wiki/Plugins) and [themes](https://github.com/robbyrussell/oh-my-zsh/wiki/themes)
5. [wordy neardy zsh prompt](http://zanshin.net/2012/03/09/wordy-nerdy-zsh-prompt/)

#Related past episodes

1. [terminal](http://build-podcast.com/terminal/)
2. [bash](http://build-podcast.com/bash/)
3. [rails](http://build-podcast.com/rails/), [nanoc](http://build-podcast.com/nanoc/)

#Build Link of this Episode

[Make Sets](http://www.makesets.com/): curated lists of related links