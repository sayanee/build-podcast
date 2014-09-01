FROM    ubuntu:14.04

RUN     apt-get update
RUN     apt-get install -y git curl nano build-essential libssl-dev libreadline-dev libffi-dev libgdbm-dev

# install ruby
ADD     http://cache.ruby-lang.org/pub/ruby/2.1/ruby-2.1.2.tar.bz2 /
RUN     tar xvjf ruby-2.1.2.tar.bz2 && cd ruby-2.1.2 && ./configure --disable-install-doc --with-openssl-dir=/usr/bin && make && make install && cd / && rm -rf /ruby-2.1.2
RUN     gem install sass compass jekyll --no-ri --no-rdoc

# install node, npm, bower, grunt
RUN     apt-get install -y software-properties-common python-software-properties git curl nano nginx
RUN     apt-get install -y nodejs nodejs-dev npm
RUN     ln -s /usr/bin/nodejs /usr/bin/node
RUN     npm install -g bower grunt grunt-cli

RUN     mkdir /apps
ADD     . /apps/bp
WORKDIR /apps/bp

EXPOSE  4000

CMD     ["jekyll", "serve", "--watch", "--config", "_dev_config.yml"]
