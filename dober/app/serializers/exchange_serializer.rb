class ExchangeSerializer < ActiveModel::Serializer
  attributes :id, :started_at, :ended_at, :owner_approved, :time_elapsed, :cost
  belongs_to :equipment
  belongs_to :user
end
