// External Dependancies
const mongoose = require('mongoose')

const eeeSchema = new mongoose.Schema({
    eee: [{ staffName: String }]
})

module.exports = mongoose.model('Eee', eeeSchema)