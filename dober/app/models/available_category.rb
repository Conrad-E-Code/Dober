class AvailableCategory < ApplicationRecord
    has_many :active_categories
    has_many :equipment, through: :active_categories
    # plan for creation of additional categories in future admin feature creating new cats 
end
