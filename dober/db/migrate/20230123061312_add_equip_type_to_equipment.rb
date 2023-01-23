class AddEquipTypeToEquipment < ActiveRecord::Migration[7.0]
  def change
    add_column :equipment, :equip_type, :string
  end
end
