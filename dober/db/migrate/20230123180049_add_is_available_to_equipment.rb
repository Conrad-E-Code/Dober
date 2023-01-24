class AddIsAvailableToEquipment < ActiveRecord::Migration[7.0]
  def change
    add_column :equipment, :is_available, :boolean
  end
end
