class Exchange < ApplicationRecord
    #join table between an equipment and a user.
    belongs_to :user #person borrowing equipment
    belongs_to :equipment #equipment being shared

    def owner_allow_link
        return "http://localhost:4000/exchange/app/#{self.id}"
    end
    def borrower_start_link
        return "http://localhost:4000/exchange/start/#{self.id}"
    end
end
