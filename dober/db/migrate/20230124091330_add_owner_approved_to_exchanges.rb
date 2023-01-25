class AddOwnerApprovedToExchanges < ActiveRecord::Migration[7.0]
  def change
    add_column :exchanges, :owner_approved, :boolean
  end
end
