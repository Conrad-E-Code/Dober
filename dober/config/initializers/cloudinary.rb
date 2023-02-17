puts "INITIALIZER WORK TO BE DONE!"
#CLoudinary ENV thing. 11:14AM
#Cloudinary.config
#Cloudinary.config_from_url(ENV["CLOUDINARY"])
# turn on CORS?
# Cloudinary.config_from_url(ENV["CLOUDINARY_URL"])
# Clouidnary.config do |config|
#     config.secure = true
# end
# puts "Connected to: #{Cloudinary.config.cloud_name}"

Cloudinary.config_from_url ENV["CLOUDINARY_URL"]
Cloudinary.config do |config|
    config.secure = true
end
puts "\nConnected to: #{Cloudinary.config.cloud_name}\n"
