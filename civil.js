// External Dependancies
const mongoose = require('mongoose')

const civilSchema = new mongoose.Schema({
    civil: [{ staffName: String }]
})

module.exports = mongoose.model('Civil', civilSchema)