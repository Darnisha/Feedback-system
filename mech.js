// External Dependancies
const mongoose = require('mongoose')

const mechSchema = new mongoose.Schema({
    mech: [{ staffName: String }]
})

module.exports = mongoose.model('Mech', mechSchema)