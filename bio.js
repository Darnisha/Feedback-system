// External Dependancies
const mongoose = require('mongoose')

const itSchema = new mongoose.Schema({
    bio: [{ staffName: String }]
})

module.exports = mongoose.model('Bio', itSchema)