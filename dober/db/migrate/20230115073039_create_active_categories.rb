class CreateActiveCategories < ActiveRecord::Migration[7.0]
  def change
    create_table :active_categories do |t|

      t.timestamps
    end
  end
end
