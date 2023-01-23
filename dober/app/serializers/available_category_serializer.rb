class AvailableCategorySerializer < ActiveModel::Serializer
  attributes :id, :name
  # has_many :equipment, through: :active_categories
end
