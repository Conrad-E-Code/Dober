class Exchange < ApplicationRecord
    #join table between an equipment and a user.
    belongs_to :user #person borrowing equipment
    belongs_to :equipment #equipment being shared

end
