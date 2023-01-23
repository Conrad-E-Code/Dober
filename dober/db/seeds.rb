# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# dev = User.create username: "dev", password_digest: "test1234", email: "dev888909@gmail.com", coordinates: "12,12" phone_number: "1231231234"
# con = User.create username: "Conrad", password_digest: "test1234", email: "conrad.etherington@gmail.com", coordinates: "11,12" phone_number: "4564564567"

# dozer = Equipment.create name: "Betsy", model: "D9", year: 1987, hourly_rate:95 user_id: user.id


# CATEGORIES OF EQUIPMENT
# HOME
# GARDEN/LANDSCAPE
# TRAILER/TOWING
# SNOW REMOVAL
# CONSTRUCTION/HEAVY
# AGRICULTURE
# LABORATORY
# OTHER
puts "Seeding available Categories..."
AvailableCategory.destroy_all
home = AvailableCategory.create name: "HOME"
garden = AvailableCategory.create name: "GARDEN & LANSCAPING"
snow = AvailableCategory.create name: "SNOW REMOVAL"
trailer= AvailableCategory.create name: "TRAILER, TOWING & LOGISTICS"
farming = AvailableCategory.create name: "FARMING/AGRICULTURE"
construction = AvailableCategory.create name: "CONSTRUCTION & HEAVY"
generators = AvailableCategory.create name: "GENERATORS"
other = AvailableCategory.create name: "EVERYTHING ELSE"
puts "Done seeding A-C's!"
