set :application, "cap-github-ec2"
set :deploy_to, "/var/www/html"

set :scm, :git
set :repository, "git@github.com:chinee/hello-cap-ec2.git"
set :scm_username, "sayanee"

set :location, "ec2-23-22-108-38.compute-1.amazonaws.com"
role :app, location
role :web, location
set :user, "ec2-user"
ssh_options[:keys] = ["/Users/sayanee/.ssh/ec2.pem"]
default_run_options[:pty] = true

set :branch, 'master'
set :scm_verbose, true
