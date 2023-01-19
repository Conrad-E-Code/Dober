class User < ApplicationRecord
    has_secure_password
    validates :username, {uniqueness: true, presence: true}
    has_many :equipment
    has_many :exchanges
    #has_many :taskos, through: :equipment a user could be associated with tasks through their equipment postings.
end
