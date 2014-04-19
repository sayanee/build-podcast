require 'httparty'

class Question

  def count
    response = HTTParty.get('https://api.stackexchange.com/2.2/questions?site=stackoverflow&tagged=rspec')
    titles = []

    JSON.parse(response.body)['items'].map { |arr| titles << arr['title'] }

    puts titles

    titles.count
  end

end
