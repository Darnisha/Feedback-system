// External Dependancies
const mongoose = require('mongoose')

const itSchema = new mongoose.Schema({
    it: [{ staffName: String }]
})

module.exports = mongoose.model('It', itSchema)