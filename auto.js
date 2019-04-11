// External Dependancies
const mongoose = require('mongoose')

const autoSchema = new mongoose.Schema({
    auto: [{ staffName: String }]
})

module.exports = mongoose.model('Auto', autoSchema)