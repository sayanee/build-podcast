set :application, "cap-github-ec2"
set :deploy_to, "/var/www/html"

set :scm, :git
set :repository, "git@github.com:username/repo.git"
set :scm_username, "username"

set :location, "ec2-xx-xxx-xx-xxx.compute-1.amazonaws.com"
role :app, location
role :web, location
role :db,  location, :primary => true
set :user, "ec2-user"
ssh_options[:keys] = ["/Users/username/.ssh/mykey.pem"]
default_run_options[:pty] = true

set :branch, 'master'
set :scm_verbose, true