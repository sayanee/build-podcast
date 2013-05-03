#Build Podcast ep 041 - Vim
[Screencast link](http://build-podcast.com/vim/)

[Vim](http://www.vim.org/) is an extension of Vi editor, a powerful text editor used with much configurations and customisations among developers. With many keystrokes and shortcuts, we can achieve enchanced productivity given the high learning curve. In this episode we will review the basics of Vim with a simple outline of software design patterns.

version: 7.3

#Background on Vim 

1. [Main website](http://www.vim.org/)
2. [Wikipedia](http://en.wikipedia.org/wiki/Vim_(text_editor\))
3. [MacVim](https://code.google.com/p/macvim/)
1. [Git commit after merge opens VIM](http://stackoverflow.com/questions/9199222/git-commit-after-merge-opens-vim)


#Things to learn with Vim

##1 download and open vim
1. [download](http://www.vim.org/download.php) or on a MAC OSX, just open the command line and type `vim`
2. [update the MAC OSX vim](http://stackoverflow.com/questions/7211820/update-built-in-vim-on-mac-os-x) with [MacVim](https://code.google.com/p/macvim/)
3. go through the in-built vim tutor with `vimtutor` in the command line


##2. basics

1. open your command line and note the folder path that you are in currently
2. **open**

    - open new file
    
        ```
        vim
        ```
    - open one file
    
        ```
        vim path/to/file/name
        ```
        
    - open 2 files
    
        ```
        vim file1 file2
        ```
    - access next file in the buffer is `:bn` and to view all buffers it is `:ls`
    
2. **edit** the file

    - press `i` to go into `INSERT` mode and type in some test words
4. **save** the file

    - press `ESC` to go back into `COMMAND` mode
    - save with a new file name
    
        ```
        :w hello.txt
        ```
5. **quit with no changes** 

    - press `ESC` to go back into `COMMAND` mode
    - quit
    
        ```
        :q
        ```
5. **quit without saving change** 

    - press `ESC` to go back into `COMMAND` mode
    - quit
    
        ```
        :q!
        ```
5. **quit and save** 

    - press `ESC` to go back into `COMMAND` mode
    - quit
    
        ```
        :wq
        ```
6. **navigate** through the file contents

   - press `ESC` to go back into `COMMAND` mode
   - left `h` or `5h` to go 5 characters to the left (repeater)
   - right `l` or `5l` (repeater)
   - up `k` or `5k` (repeater)
   - down `j` or `5j` (repeater)
   - next word: `w` or `5w` (repeater)
   - the word before: `b` or `5b` (repeater)
   - start of the line: `^`
   - end of the line: `$`
   
1. **edit**

    - delete: `x`
    - undo: `u` 
    - delete word: `dw` or `3dw` to delete 3 words
    - delete line: `dd` or `3dd` to delete 3 lines
    
1. **cut copy paste**

    - cut: `x`
    - copy: `y`
    - paste: `shift + p`

1. **search and replace**

    - search: `\term`
    - next: `n`
    - previous: `shift + n`
    - clear highlighting of searches: `:noh`
    
1. **access command line**

   - press `ESC` to go back into `COMMAND` mode
   - `:!` example `:!ls`
   - paste the output from the command line `:r !date` 
   
##3. layout

1. windows
   
    - split vertically `:vs path/to/file/name`
    - split horizontally `:split path/to/file/name`
    - toggle through the windows `cntrl + w + h/j/k/l` for left/bottom/top/right
    - close window `:q`

1. tab

    - open in a new tab `:tabe path/to/file/name`
    - go to next tab `gt`
    - close tab `:q`
    
##4. vim config

1. the file resides in `~/.vimrc`
1. some common settings include:

    ```
    set nocompatible
    
    call pathogen#infect()
    
    syntax enable
    set number
    set incsearch
    set hlsearch
    set autoindent
    set smartindent
    set shiftwidth=2
    set guifont=Monaco:h25
    set fileencoding=utf-8
    set encoding=utf-8
    set ruler
    set hidden
    colorscheme solarized
    set tabstop=2
    set foldenable

    ```
  
##5. macros

1. start recording: `qa`, where `a` is the name of the macro
2. stop recording: `q`
3. view the registered commands: `:reg`
4. start the macro: `@a` or repeat it `200@a`, where `a` is the name of the macros

##6. color scheme

1. get current theme: `:colo`
2. set current theme: `:colo [tab]` or `:colo [theme]`
3. set light/dark options: `:set bg=light`


#More Resources on Vim 

1. nano, pico and other command line [text editors](http://en.wikipedia.org/wiki/List_of_text_editors)
2. [Mac Vim](https://code.google.com/p/macvim/)
1. [Just use Sublime Text](http://delvarworld.github.io/blog/2013/03/16/just-use-sublime-text/)
1. [How to set environment variables on MAC OSX Lion](http://stackoverflow.com/questions/7501678/set-environment-variables-on-mac-os-x-lion)
2. [Vimcast](http://vimcasts.org/)
3. [Tutsplus Vim course](https://tutsplus.com/course/venture-into-vim/)

#More resources on the project - design patterns

1. [Design Patterns by the gang of 4](http://en.wikipedia.org/wiki/Design_Patterns)
2. [Design patterns book](http://www.amazon.com/Design-Patterns-Object-Oriented-Professional-Computing/dp/0201634988)


#Related Build Podcast episodes
1. [Siblime Text](http://build-podcast.com/sublime-text/)
2. [Terminal](http://build-podcast.com/terminal/)

#Build Link of this episode

[Podcasts for designers and developers!](http://www.smashingmagazine.com/2013/04/19/podcasts-for-designers-developers/) by [Smashing Magazine](http://www.smashingmagazine.com/)
