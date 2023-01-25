class User < ApplicationRecord
    has_secure_password
    validates :username, {uniqueness: true, presence: true}
    validates :email, {uniqueness: true, presence: true}
    has_many :equipment
    #has_many :exchanges
    has_many :exchanges, through: :equipment
    #has_many :taskos, through: :equipment a user could be associated with tasks through their equipment postings.
    def generate_password_token!
        self.reset_password_token = generate_token
        self.reset_password_sent_at = Time.now.utc
        save!
       end
       
       def password_token_valid?
        (self.reset_password_sent_at + 1.hours) > Time.now.utc
       end
       
       def reset_password!(password)
        self.reset_password_token = nil
        self.password = password
        save!
       end
       
       private
       
       def generate_token
        SecureRandom.hex(10)
       end

end
