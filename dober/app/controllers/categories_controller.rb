class CategoriesController < ApplicationController
    def index 
        # .find_each do |cat|
        # cats<<cat
        # end
        cats = AvailableCategory.all
        if cats != []
            render json: cats, status: :ok 
        else
            render json: {errors: "Couldn't Load Categories: category list empty"}, status: 404
        end
    end
    def show 
        cat = AvailableCategory.find_by id: params[:id]
        equip = cat.equipment.where is_available: true # only show equipment not currently rented out.
        if equip != []
            render json: equip, status: :ok
        else
            render json: {errors:["No equipment found here, be the first to post!"]}, status: 404
        end
    end
end