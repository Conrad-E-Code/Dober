class CreateEquipment < ActiveRecord::Migration[7.0]
  def change
    create_table :equipment do |t|
      t.integer :user_id
      t.string :name
      t.string :model
      t.integer :year
      t.string :description
      t.float :hourly_rate
      t.string :coordinates
      #minimum rate?
      t.timestamps
    end
  end
end
