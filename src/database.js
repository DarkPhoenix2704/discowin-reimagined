const Discord = require('discord.js')
const userModel = require('./model/user')

module.exports.addUser = async (_id,age,district) => {
    let user = new userModel({_id:_id,age:age,district:district})
    await user.save()
}