class AddStartedAtAndEndedAtToExchanges < ActiveRecord::Migration[7.0]
  def change
    add_column :exchanges, :started_at, :string
    add_column :exchanges, :ended_at, :string
  end
end
