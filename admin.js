// External Dependancies
const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    admin: String,
    testOne: String,
    testTwo: String,
    testThree: String,
    testFour: String,
})

module.exports = mongoose.model('Admin', adminSchema)