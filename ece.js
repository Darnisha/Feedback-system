// External Dependancies
const mongoose = require('mongoose')

const eceSchema = new mongoose.Schema({
    ece: [{ staffName: String }]
})

module.exports = mongoose.model('Ece', eceSchema)