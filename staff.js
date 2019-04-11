// External Dependancies
const mongoose = require('mongoose')

const staffSchema = new mongoose.Schema({
  staffName: String
})

module.exports = mongoose.model('Staff', staffSchema)