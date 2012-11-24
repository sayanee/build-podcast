class Note < ActiveRecord::Base
  attr_accessible :description, :task_id
  belongs_to :task
end
