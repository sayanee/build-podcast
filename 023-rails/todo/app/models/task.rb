class Task < ActiveRecord::Base
  attr_accessible :description, :done, :tag
  validates :description, :tag, :presence => true
  has_many :notes
end
