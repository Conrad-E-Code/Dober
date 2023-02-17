class CreateEquipImages < ActiveRecord::Migration[7.0]
  def change
    create_table :equip_images do |t|
      t.string :url
      t.integer :equipment_id
      t.timestamps
    end
  end
end
