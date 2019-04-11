// External Dependancies
const mongoose = require('mongoose')

const fieldSchema = new mongoose.Schema({
   
    fieldOne: String,
    fieldTwo: String,
    fieldThree: String,
    fieldFour: String,
})

module.exports = mongoose.model('Field', fieldSchema)