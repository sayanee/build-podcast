require './user'
require 'factory_girl'

FactoryGirl.find_definitions
RSpec.configure do |config|
  config.include FactoryGirl::Syntax::Methods
end

describe User do

  describe '#greeting' do
    it 'greets everyone' do
      u = build(:user)
      expect(u.greeting). to eq('Hey Anonymous! What are you gonna read next?')
    end

    it 'greets an engineer' do
      u = build(:engineer)
      expect(u.greeting).to eq('Ola Limor Fried! What hardware are you building currently?')
    end

    it 'greets an astronaut' do
      u = build(:astronaut)
      expect(u.greeting).to eq('Hi Chris Hadfield! When are you next visiting the ISS?')
    end
  end

end
