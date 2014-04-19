require './playnum'

describe Playnum do

  before(:each) do
    @c = Playnum.new
  end

  after(:all) do
    puts 'Done!'
  end

  describe '#calcube' do
    it 'returns a cube of a number' do
      num = 3
      expect(@c.calcube(num)).to eq(27)
      expect(num).to be < 27
      expect(@c).to be_an_instance_of(Playnum)
      expect(@c).to be_kind_of(Playnum)

      expect(@c.calcube(2)).to eq(8)
    end
  end

  describe '#calsquare' do
    it 'returns a square of a number' do
      expect(@c.calsquare(3)).to eq(9)
      expect(@c.calsquare(2)).to eq(4)
    end
  end
end
