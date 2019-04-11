// Import our Controllers
const feedbackController = require('../controllers/feedbackController')

const routes = [

    {
        method: 'POST',
        url: '/api/login',
        handler: feedbackController.validateLoginCredential,
    },
    {
        method: 'POST',
        url: '/api/faculty',
        handler: feedbackController.listFaculty,
    },
    {
        method: 'POST',
        url: '/api/admin',
        handler: feedbackController.adminValidation,
    },
    {
        method: 'POST',
        url: '/api/retriveadmin',
        handler: feedbackController.retriveAdmin,
    },
    {
        method: 'POST',
        url: '/api/field',
        handler: feedbackController.fieldSave,
    },
    {
        method: 'POST',
        url: '/api/retrivefield',
        handler: feedbackController.retriveField,
    }

    
    
]

module.exports = routes