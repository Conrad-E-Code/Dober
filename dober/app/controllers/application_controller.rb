class ApplicationController < ActionController::API
    rescue_from ActiveRecord::RecordInvalid, with: :render_ue
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
private
    def render_ue invalid
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
      end
      def render_not_found_response
        render json: { errors: ["Not found >>"] }, status: :not_found
      end
end
