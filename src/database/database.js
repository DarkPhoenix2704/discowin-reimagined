const Discord = require('discord.js')
const userModel = require('./model/user')
const districtModel = require('./model/district')
const sessionModel = require('./model/session')



module.exports.addUser = async (id, age, district) => {
    let user = new userModel({
        _id: id,
        age: age,
        district_name: district
    })
    await user.save()
}

module.exports.removeUser = async (id) => {
    await userModel.remove({
        _id: id
    }, (err) => console.log(err))
}

module.exports.getUser = async (id) => {
    let user = await userModel.find({
        _id: id
    })
    return user
}
module.exports.getUsers = async () => {
    await userModel.find({}, (err, data) => {
        if (err) return []
        return data
    })
}




module.exports.addDistrict = async (_id, district) => {
    let _district = new districtModel({
        _id,
        district
    })
    await _district.save
}

module.exports.getDistricts = async () => {
    await districtModel.find({}, async (err, data) => {
        if (err) return []
        return data
    })
}

module.exports.getDistrict = async (district) => {
    await districtModel.find({
        district: district
    }, (err, data) => {
        if (err) return null
        return data
    })
}

module.exports.deleteDistricts = async () => {
    await districtModel.deleteMany({})
}



module.exports.getSessions = async (district_name, age) => {
    await sessionModel.find({
        district_name: district_name,
        min_age_limit: getAge(age)
    }, (err, data) => {
        if (err) return []
        return data
    })
}

module.exports.addSession = async (id, district_name, name, vaccine, min_age_limit, fee_type, fee, available_capacity, date) => {
    await sessionModel.findOneAndUpdate({
        _id: id
    }, {
        _id: id,
        district_name: district_name,
        name: name,
        vaccine: vaccine,
        min_age_limit: min_age_limit,
        fee_type: fee_type,
        fee: fee,
        available_capacity: available_capacity,
        date: date
    }, {
        upsert: true
    })
}

module.exports.deleteSessionWhere = async (district_name) => {
    await sessionModel.remove({
        district_name: district_name
    }, (err) => {
        console.log(err)
    })
}

module.exports.deleteSessions = async () => {
    await sessionModel.deleteMany()
}


function getAge(age) {
    if (age >= 18 && age < 45) {
        return 18
    } else if (age >= 45) {
        return 45
    }
}