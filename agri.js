// External Dependancies
const mongoose = require('mongoose')

const agriSchema = new mongoose.Schema({
    agri: [{ staffName: String }]
})

module.exports = mongoose.model('Agri', agriSchema)