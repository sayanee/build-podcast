require 'sinatra'

before do
  @heading = "Prisoner's Dilemma"
  @decision = ["silent", "betray"]
end

get '/decision/:type' do

  @a_decision = params[:type].to_s # me
  @b_decision = @decision.sample.to_s # confidential, by computer

  if @a_decision == @b_decision
    if @a_decision == 'silent'
      @result = 'Both get 1 year'
    else
      @result = 'Both get 3 years'
    end
  else
    if @a_decision == 'silent'
      @result = 'A gets 3 years, B is free!'
    else
      @result = 'A is free, B gets 3 years!'
    end
  end

  erb :decision

end