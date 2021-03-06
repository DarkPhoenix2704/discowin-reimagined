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
    await userModel.deleteOne({
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


module.exports.addDistrict = async (id, district) => {
    await new districtModel({
        _id: id,
        district: district
    }).save()
}

module.exports.getDistricts = async () => {
    await districtModel.find({}, async (err, data) => {
        if (err) return []
        return data
    })
}

module.exports.getDistrict = async (district) => {
    let _district = await districtModel.find({
        district: district
    })
    return _district
}

module.exports.deleteDistricts = async () => {
    await districtModel.deleteMany({})
}


module.exports.getSessions = async (district_name, age) => {
    let sessions = await sessionModel.find({
        district_name: district_name,
        min_age_limit: getAge(age)
    })
    return sessions
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
    await sessionModel.deleteMany({
        district_name: district_name
    }, (err => {
        console.log(err)
    }))
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