class Api::UploadController < ApplicationController
    def upload_image
       hash = Cloudinary::Uploader.upload params[:imageFile], folder: "folder_name", public_id: params[:name], unique_filename: false
       #11:50
    end
end
