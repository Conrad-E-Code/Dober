class ActiveCategory < ApplicationRecord
    #join table for equipment and active categories
    belongs_to :available_category
    belongs_to :equipment
    #has_many :taskos, through: :equipment
end
