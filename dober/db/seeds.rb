# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

dev = User.create username: "dev", password_digest: "test1234", email: "notanemail@dev.com", coordinates: "12,12" phone_number: "1231231234"
con = User.create username: "Conrad", password_digest: "test1234", email: "conrad@dev.com", coordinates: "11,12" phone_number: "4564564567"

dozer = Equipment.create name: "Betsy", model: "D9", year: 1987, hourly_rate:95