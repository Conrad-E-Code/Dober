class Equipment < ApplicationRecord
    validates :user_id, :name, :model, :year, :description, :hourly_rate, presence: true
    belongs_to :user
    has_many :taskos
    has_many :active_categories
    #front end will need a form for creating equipment.
end
