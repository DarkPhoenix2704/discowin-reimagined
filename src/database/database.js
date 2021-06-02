const Discord = require('discord.js')
const userModel = require('./model/user')
const districtModel = require('./model/district')



module.exports.addUser = async (_id, age, district) => {
    let user = new userModel({
        _id: _id,
        age: age,
        district: district
    })
    await user.save()
}

module.exports.removeUser = async (_id) => {
    userModel.remove({
        _id: _id
    }, (err) => console.log(err))
}

module.exports.addDistrict = async (_id, district) => {
    let _district = new districtModel({
        _id,
        district
    })
    await _district.save
}

module.exports.getDistricts = async () => {
    districtModel.find({}, async (err, data) => {
        if (err) return null
        return data
    })
}

module.exports.getDistrict = async (district) => {
    districtModel.find({
        district: district
    }, (err, data) => {
        if (err) return null
        return data
    })
}

module.exports.deleteDistricts = async () => {
    districtModel.deleteMany({})
}