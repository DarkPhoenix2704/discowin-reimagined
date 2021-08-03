let mongoose = require('mongoose')
let session = new mongoose.Schema({
    _id: {
        type: Number,
        required: true
    },
    district_name: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    vaccine: {
        type: String,
        required: true
    },
    min_age_limit: {
        type: Number,
        required: true
    },
    fee_type: {
        type: String,
        required: true
    },
    fee: {
        type: Number
    },
    available_capacity: {
        type: Number,
        required: true
    },
    date: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('session', session)