class AddTaskIdToNotes < ActiveRecord::Migration
  def change
    add_column :notes, :task_id, :integer, :default => 1
  end
end
