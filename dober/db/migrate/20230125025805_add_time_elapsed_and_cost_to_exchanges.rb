class AddTimeElapsedAndCostToExchanges < ActiveRecord::Migration[7.0]
  def change
    add_column :exchanges, :time_elapsed, :integer
    add_column :exchanges, :cost, :float
  end
end
