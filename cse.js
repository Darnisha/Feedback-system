// External Dependancies
const mongoose = require('mongoose')

const cseSchema = new mongoose.Schema({
    cse: [{ staffName: String }]
})

module.exports = mongoose.model('Cse', cseSchema)