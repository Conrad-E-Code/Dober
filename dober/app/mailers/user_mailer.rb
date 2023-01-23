class UserMailer < ApplicationMailer
    def welcome_email(user)
        @user = user
        mail(to: @user.email, subject: 'Welcome to My Awesome Site')
    end
    def forgot_email (user)
        @user = user
        mail(to: @user.email, subject: 'Forgot Password')
    end
end
