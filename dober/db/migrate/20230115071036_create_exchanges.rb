class CreateExchanges < ActiveRecord::Migration[7.0]
  def change
    create_table :exchanges do |t|
      t.integer :user_id #belongs to borrower
      t.integer :equipment_id # belongs to equipment
        #CHECKIN /OUT TIMES
        #
      t.timestamps
    end
  end
end
