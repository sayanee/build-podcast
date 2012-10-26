#Build Podcast Ep 19 - Bash
[Screencast link ](http://build-podcast.com/bash/)

[Bash](http://en.wikipedia.org/wiki/Bash_(Unix_shell) is a Unix shell and it is available by default in Linux and MAC. It is very useful as a developer to know shell scripting and we will explore how to automate tasks (shell scripting), set profile configurations (bash profile) and schedule tasks (cron job) - all in the name of efficiency!


#Background on Bash:

1. [Why I should learn Shell Scripting?](http://programmers.stackexchange.com/questions/86403/i-need-to-know-the-reasons-why-learning-linux-shell-scripting-bash-benefits-me)
2. What is a [Unix Shell](http://en.wikipedia.org/wiki/Unix_shell) and types of Unix shell such as [bash](http://en.wikipedia.org/wiki/Bash_(Unix_shell) and [zsh](http://en.wikipedia.org/wiki/Z_shell)?
3. [Bash programming](http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO.html)
4. [Bash guide for beginners](http://tldp.org/LDP/Bash-Beginners-Guide/html/index.html)
5. [Advanced bash scripting guide](http://tldp.org/LDP/abs/html/)
6. What is a [Cron](http://en.wikipedia.org/wiki/Cron) job

#Things to learn with Bash

###1. basic logic

Open up the [Terminal App] and type in the followng to play around with basic shell logic:

- list all available shells: `cat /etc/shells`
- current shell name: `echo $SHELL`
- current bash version: `echo $BASH_VERSION`
- global variables: `env`
- where is bash located: `which bash`
- `echo Hello World!`
- variables in command line: `os=MAC`, `echo I am using a $os!`
- create a simple shell script, `touch hello.sh`. Ensure `hello.sh` has read, write and execute permissions by running `chmod u+x hello.sh` . Run `./hello.sh` in the command line:

```
#!/bin/bash
STR="Hello World!"
echo $STR
```

###2. shell scripting

- simple if-else logic - edit `hello.sh` and run `./hello.sh` in command line:

```
#!/bin/bash
STR1="foo"
STR2="bar"
if [ "$STR1" = "$STR2" ]; then
    echo String 1 is the same as String 2
else
    echo String1 is not the same as String 2
fi
```

- simple for-loop:

```
#!/bin/bash
for i in `seq 1 10`; do
  echo $i
done
```

- function without parameters:

```
#!/bin/bash
function hello {
   echo Hello from the function!
}
hello
```

- function with parameters:

```
#!/bin/bash
function e {
    echo $1 
}  
e Hello
e World
```
- read user inputs:

```
#!/bin/bash
echo Which unix shell do you use?
read FIRST SECOND
echo "Awesome! You use $FIRST, $SECOND !
```
- an automated task: create a file `start`


```
#!/bin/bash
echo What is your project name?

read PROJECT
mkdir $PROJECT
cd $PROJECT
touch index.html
mkdir js css img
touch js/script.js style.css
```


###3. bash profile

- export path: `export PATH=/path/to/the/directory:$PATH`
- create alias: `alias rd='rm -rf'`
- customise bash prompt: `export PS1='\u @ \h in \w:'` or something more:

```
function parse_git_branch {
  git branch --no-color 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/on \1/'
}
export PS1="\e[0;35m\u\e[m in \e[0;34m\w\e[m \e[0;32m\$(parse_git_branch)\e[m\no  "
```

###4. cron jobs

Use the command line: 

- to list all current cron jobs: `crontab -l`
- manual for cron jobs: `man cron`
- to create a cron job: 
    1. create a shell script in Desktop called `printdate.sh` and `chmod u+x printdate.sh`with the following contents:
    
      ```
      #!/bin/bash
      date >> /Users/username/Desktop/o.txt
      ```
    2. create a cron job according to the [format](http://en.wikipedia.org/wiki/Cron#Examples)
    3. `crontab -e` with vim text editor or `EDITOR=subl crontab -e` with Sublime Text editor
    4. insert `*/1 * * * * /Users/username/Desktop/printdate.sh` and save the file. this will print the current date time into o.txt every minute
    5. `tail -f o.txt` to watch the changes in the file continuously

#More Resources on Bash

1. [Shell scripting for mac](https://developer.apple.com/library/mac/#documentation/opensource/conceptual/shellscripting/Introduction/Introduction.html)
2. [sample bash profile](http://tldp.org/LDP/abs/html/sample-bashrc.html)
3. [customise bash prompt](http://www.cyberciti.biz/tips/howto-linux-unix-bash-shell-setup-prompt.html)
4. [best practices for maintaining cron jobs and shell scripts](http://stackoverflow.com/questions/5647985/best-practices-for-maintaining-cronjobs-and-shell-scripts)


#Related Build Podcast episodes

- [Terminal](http://build-podcast.com/terminal/)

#Build Link of this Episode

[Coursera](https://www.coursera.org/) offers courses online by partnering leading universities in the world.