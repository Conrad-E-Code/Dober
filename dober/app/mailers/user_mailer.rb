class UserMailer < ApplicationMailer
    def welcome_email(user)
        @user = user
        mail(to: @user.email, subject: 'Welcome to My Awesome Site')
    end
    def forgot_email (user)
        @user = user
        mail(to: @user.email, subject: 'Forgot Password')
    end
    def initiate_exchange_email(owner, borrower, equipment, exchange)
        @exchange= exchange
        @owner = owner
        @borrower = borrower
        @equipment = equipment
        mail(to: @owner.email, subject: 'test URGENT: someone wants to borrow your equipment')
    end
    def owner_approve_email(exchange)
        @exchange = exchange
        mail(to: @exchange.user.email, subject: "Equipment Ready For Pickup")
    end
    def start_timer_email(exchange)
        @exchange = exchange
        @recipients = []
        @recipients << exchange.user.email
        @recipients << exchange.equipment.user.email
        @recipients.each do |recip|
            mail(to: recip, subject: "Equipment Exchange Started!")
        end
    end
    def end_timer_email(exchange)
        @exchange = exchange
        @recipients = []
        @recipients << exchange.user.email
        @recipients << exchange.equipment.user.email
        @recipients.each do |recip|
            mail(to: recip, subject: "Equipment Exchange Ended!")
        end
    end
    # future stretch goal to require equipment owner approval prior to ending exchange similar to the check in process
end
