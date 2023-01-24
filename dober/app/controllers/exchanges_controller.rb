class ExchangesController < ApplicationController
    def create
        borrower = User.find_by id: params[:user_id]
        if borrower != nil
            equipment = Equipment.find_by id: params[:equipment_id]
            if equipment != nil
                owner = User.find_by id: equipment.user_id
                if owner != nil
                    exchange = Exchange.create! user_id: borrower.id, equipment_id: equipment.id
                    UserMailer.initiate_exchange_email(owner, borrower, equipment, exchange).deliver_now
                    render json:{message: "Sent"}, status: :ok
                else
                    render json: {errors: "Owner Not Found"}, status: 404
                end
            else 
                render json: {errors: "Equipment Not Found"}, status: 404
            end
        else
            render json: {errors: "Couldn't find valid borrower id"}, status: 404
        end
    end
    def owner_approve
        byebug
        exchange = Exchange.find params[:id] #fix error this is equip id
        equip = exchange.equipment
        owner = User.find_by id: equip.user_id
        borrower = User.find_by id: exchange.user_id
        user = User.find_by id: session[:user_id]
        if owner == user
            exchange.update owner_approved: true
            if exchange.owner_approved == true
                UserMailer.owner_approve_email(exchange)
                render json: {message: "Sent Approval to Client"}, status: 202
            else
                render json: {errors: ["couldn't Approve"]}, status: 401
            end
        else 
            render json: {errors: ["Couldn't validate owner, is this your equipment?"]}, status: 401
        end
    end
    def start_exc
        d = DateTime.now
        string_time = d.strftime("%d%m%Y %H%M")
        exchange = Exchange.find_by id: params[:id]
        user = User.find_by id: session[:user_id]
        if exhange.user == user
            exchange.update started_at: string_time
            UserMailer.start_timer_email(exchange)
            render json: exchange, status: :ok
        end
    end
end