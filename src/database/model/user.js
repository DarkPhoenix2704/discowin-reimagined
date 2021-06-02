let mongoose = require('mongoose')
let user = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
        unique: true,
    },
    age: {
        type: Number,
        required: true
    },
    district_name: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('user', user)