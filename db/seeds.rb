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

general = Channel.create(name: "General")
ruby = Channel.create(name: "Ruby")
javascript = Channel.create(name: "JavaScrip")
python = Channel.create(name: "Python")

test_user = User.create(email:"test@test.com", password: "123456")
juan_user = User.create(email:"juan@test.com", password: "123456")

Message.create(user: test_user, channel: general, content: "first message")
Message.create(user: test_user, channel: general, content: "second message")
Message.create(user: juan_user, channel: ruby, content: "first message")
Message.create(user: test_user, channel: general, content: "second message")
Message.create(user: test_user, channel: javascript, content: "first message")
Message.create(user: juan_user, channel: python, content: "first message")
Message.create(user: test_user, channel: general, content: "second message")
