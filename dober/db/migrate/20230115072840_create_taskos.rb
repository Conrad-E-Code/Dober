class CreateTaskos < ActiveRecord::Migration[7.0]
  def change
    create_table :taskos do |t|
      t.string :name
      t.integer :equipment_id
      t.timestamps
    end
  end
end
