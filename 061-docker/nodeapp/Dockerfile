FROM      ubuntu:14.04

RUN       apt-get update
RUN       apt-get install -y git curl nano nodejs nodejs-dev npm
RUN       curl https://raw.githubusercontent.com/sayanee/dotfiles/master/.bashrc > /.bashrc
RUN       ln -s /usr/bin/nodejs  /usr/bin/node

RUN       mkdir /apps
ADD       . /apps/nodeapp

WORKDIR   /apps/nodeapp

EXPOSE    8000
CMD       ["node", "/apps/nodeapp/app.js"]
