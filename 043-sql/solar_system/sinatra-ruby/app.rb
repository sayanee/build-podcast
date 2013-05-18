require 'rubygems'
require 'sinatra'
require 'mysql2'
require 'active_record'

ActiveRecord::Base.establish_connection(
  :adapter  => 'mysql2',
  :host     => 'localhost',
  :database => 'solar_system',
  :username => 'root',
  :password => 'root',
  :socket => '/Applications/MAMP/tmp/mysql/mysql.sock'
)

class Planet < ActiveRecord::Base
end

get '/' do
  @planets = Planet.all()
  erb :index
end
