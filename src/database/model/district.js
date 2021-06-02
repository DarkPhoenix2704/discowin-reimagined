let mongoose = require('mongoose')
let district = new mongoose.Schema({
    _id: {
        type: Number,
        required: true
    },
    district: {
        type: String,
        required: true
    }
})
module.exports = mongoose.Model('district', district)