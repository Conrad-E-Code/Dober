class EquipmentController < ApplicationController

            #def create behaviors
            #checking for available category with matching name  
            # merging strong_params with session to get the user_id from session and still raise exceptions for 422
            # create "AC" join table instance to link equipment to available category. 
            # could adapt this in future builds to allow users to create categories of their own as a paid feature. 
    def create
        byebug
        avail_cat = AvailableCategory.find_by name: params[:category]
         if avail_cat != nil 
             new_equip = Equipment.create!(equip_params.merge(user_id: session[:user_id])) 
             ActiveCategory.create equipment_id: new_equip.id, available_category_id: avail_cat.id
             render json: new_equip, status: :created
         else 
             render json: {errors:["Please choose a valid category"]}, status: 422
         end
    end

    def index
        user = get_user
        equipment = Equipment.where user_id: user.id
        render json: equipment, status: :ok
    end

    def show 
        equip = Equipment.find params[:id]
        render json: equip, status: :ok
    end


private
    def equip_params
        params.permit :name, :model, :year, :description, :hourly_rate, :equip_type
    end

    def get_user
        user = User.find_by id: session[:user_id]
    end
end