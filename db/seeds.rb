# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Message.destroy_all
User.destroy_all
Channel.destroy_all

general = Channel.create(name: "general")
ruby = Channel.create(name: "ruby")
javascript = Channel.create(name: "javascript")
python = Channel.create(name: "python")

test_user = User.create(email:"test@test.com", password: "123456", nickname: "juagarca")

Message.create(user: test_user, channel: general, content: "Hola 👋")
Message.create(user: test_user, channel: general, content: "Thank you for your time")
Message.create(user: test_user, channel: general, content: "Looking forward to hearing from you!")
