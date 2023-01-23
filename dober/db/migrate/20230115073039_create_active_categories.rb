class CreateActiveCategories < ActiveRecord::Migration[7.0]
  def change
    create_table :active_categories do |t|
      t.integer :available_category_id #belongs to available category
      t.integer :equipment_id #belongs to equipment
      t.timestamps
    end
  end
end
