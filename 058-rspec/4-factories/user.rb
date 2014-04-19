class User
  attr_accessor :name, :occupation

  def greeting
    if @occupation == 'engineer'
      'Ola ' + @name + '! What hardware are you building currently?'
    elsif @occupation == 'astronaut'
       'Hi ' + @name + '! When are you next visiting the ISS?'
    else
      'Hey ' + @name + '! What are you gonna read next?'
    end
  end

end
