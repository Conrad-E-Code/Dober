class EquipmentSerializer < ActiveModel::Serializer
  attributes :id, :name, :model, :user_id, :equip_type, :hourly_rate, :coordinates, :description
  belongs_to :user
end
