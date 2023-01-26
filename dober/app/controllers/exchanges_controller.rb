class ExchangesController < ApplicationController
    def index
        user = User.find session[:user_id]
        arr_out = []
        exchanges = Exchange.where user_id: user.id
        arr_out << {exchanges: exchanges}
        arr_out << {owner_exchanges: user.exchanges}
        render json: arr_out, status: :ok
    end

    def show
        exchange = Exchange.find params[:id]
        render json: exchange, status: :ok

    end
            # WHAT NOT TO DO
        # owner_equipment = Equipment.where user_id: session[:user_id]
        # arr_out = []
        # owner_exchanges = owner_equipment.map do |equip| 
        #     equip_exchanges = [...equip.exchanges]
        #     arr_out << equip_exchanges
        # end

    def create
        borrower = User.find_by id: params[:user_id]
        if borrower != nil
            equipment = Equipment.find_by id: params[:equipment_id]
            if equipment != nil && equipment.is_available
                owner = User.find_by id: equipment.user_id
                if owner != nil && owner.id != borrower.id
                    exchange = Exchange.create! user_id: borrower.id, equipment_id: equipment.id
                    UserMailer.initiate_exchange_email(owner, borrower, equipment, exchange).deliver_now
                    render json:{message: "Sent"}, status: :ok
                else
                    render json: {errors: ["Owner Not Found OR Invalid Owner, You Can't Borrow Your Own Equipment"]}, status: 404
                end
            else 
                render json: {errors: ["Equipment Not Found OR Unavailable, someone else might be using this equipment"]}, status: 404
            end
        else
            render json: {errors: ["Couldn't find valid borrower id"]}, status: 404
        end
    end
    def owner_approve
        exchange = Exchange.find params[:id]
        equip = exchange.equipment
        owner = User.find_by id: equip.user_id
        borrower = User.find_by id: exchange.user_id
        user = User.find_by id: session[:user_id]
        if owner == user
            exchange.update owner_approved: true
            exchange.equipment.update is_available: false
            if exchange.owner_approved == true && exchange.started_at == nil
                UserMailer.owner_approve_email(exchange).deliver_now
                render json: exchange, status: 202
            else
                render json: {errors: ["couldn't Approve or exchange is already started."]}, status: 401
            end
        else 
            render json: {errors: ["Couldn't validate owner, is this your equipment?"]}, status: 401
        end
    end
    def start_exc
        d = DateTime.now
        # string_time = d.strftime("%d%m%Y %H%M")
        exchange = Exchange.find_by id: params[:id]
        user = User.find_by id: session[:user_id]
        if exchange.user_id == user.id && exchange.started_at == nil
            exchange.update started_at: d
            UserMailer.start_timer_email(exchange).deliver_now
            render json: exchange, status: :ok
        else
            render json: {errors:["Couldn't verify user login or Exchange already Started"]}, status: 401
        end
    end
    def end_exc
        d = DateTime.now
        # string_time = d.strftime("%d%m%Y %H%M")
        exchange = Exchange.find_by id: params[:id]
        user = User.find_by id: session[:user_id]
        if exchange.user == user && exchange.ended_at == nil
            time_calc = TimeDifference.between(exchange.started_at, d).in_minutes
            cost_per_minute = exchange.equipment.hourly_rate / 60
            cost_calc = cost_per_minute * time_calc
            exchange.update ended_at: d, time_elapsed: time_calc, cost: cost_calc
            exchange.equipment.update is_available: true
            UserMailer.end_timer_email(exchange).deliver_now
            render json: exchange, status: :ok
        else
            render json: {errors:["Couldn't End Exchange"]}, status: 401
        end
    end
    def destroy 
        exchange = Exchange.find params[:id]
        if exchange.started_at == nil
            exchange.destroy
            head :no_content
        else
            render json: {errors:["Cant destroy an exchange that has been started"]}, status: 401
        end
    end
end