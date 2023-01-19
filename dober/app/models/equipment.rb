class Equipment < ApplicationRecord
    belongs_to :user
    has_many :taskos
    has_many :active_categories
    #front end will need a form for creating equipment.
end
