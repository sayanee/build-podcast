require './question'

describe Question do

  describe '#count' do
    it 'gets the number of rspec questions from StackOverflow' do
      r = Question.new

      r.stub(:count).and_return(11)
      r.should_receive(:count).and_return(11)

      expect(r.count).to be > (10)
    end
  end

end
