FactoryGirl.define do

  factory :user do
    name 'Anonymous'
    occupation 'reader'
  end

  factory :astronaut, parent: :user do
    name 'Chris Hadfield'
    occupation 'astronaut'
  end

  factory :engineer, parent: :user do
    name 'Limor Fried'
    occupation 'engineer'
  end

end
