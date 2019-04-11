// External Dependancies
const boom = require('boom');

const Staff = require('../models/staff');
const db = require('../models/bio');
const IT = require('../models/it');
const EEE = require('../models/eee');
const CIVIL = require('../models/civil');

const MECH = require('../models/mech');
const ECE = require('../models/ece');
const AGRI = require('../models/agri');
const AUTO = require('../models/auto');
const CSE = require('../models/cse');
const USER = require('../models/user');
const ADMIN = require('../models/admin');
const FIELD = require('../models/field');

//list faculty
exports.listFaculty = async (req, res) => {
    try {
        const dept = req.body.faculty;
        const adminTestDb = new ADMIN({ 'admin': "true" })
        const sampleDb = new MECH({
            'mech': [
                {
                    "staffName": "Thanisha"
                },
                {
                    "staffName": "Dharun"
                },
                {
                    "staffName": "Latha"
                },
                {
                    "staffName": "Siva kumar"
                },
                {
                    "staffName": "Lakshmi"
                },
                {
                    "staffName": "Rashmi"
                },
                {
                    "staffName": "Karthi"
                },
                {
                    "staffName": "Varsha"
                }
            ]
        })
        // await adminTestDb.save()

        await adminTestDb.updateOne({ "admin": "true", test: "aaaa" },
            { admin: "test", test: "cccc" }
        );

        const bioDb = await db.find();
        const itDb = await IT.find();
        const eeeFb = await EEE.find();
        const civilDb = await CIVIL.find();

        const mechDb = await MECH.find();
        const eceDb = await ECE.find();
        const agriDb = await AGRI.find();
        const autoDb = await AUTO.find();
        const cseDb = await CSE.find();
        // console.log("itDb db is", itDb);
        console.log("mechDb db is", mechDb);
        const faculty = {
            // 'it': [{
            //     staffName: "Vijayalakshmi"
            // },
            // {
            //     staffName: "Krishnakumar"
            // },
            // {
            //     staffName: "Latha"
            // },
            // {
            //     staffName: "Premkumar"
            // },
            // {
            //     staffName: "Vijayalakshmi"
            // },
            // {
            //     staffName: "Subhulakshmi"
            // },
            // {
            //     staffName: "Karthickraj"
            // },
            // {
            //     staffName: "Vishnu"
            // }],
            'it': await itDb[0].it,
            'bio': await bioDb[0].bio,
            'eee': await eeeFb[0].eee,
            'civil': await civilDb[0].civil,
            'mech': await mechDb[0].mech,
            'ece': await eceDb[0].ece,
            'agri': await agriDb[0].agri,
            'auto': await autoDb[0].auto,
            'cse': await cseDb[0].cse
            // 'bio': [{
            //     staffName: "Rajendran"
            // },
            // {
            //     staffName: "Kumar"
            // },
            // {
            //     staffName: "Lakshmi"
            // },
            // {
            //     staffName: "Prem"
            // },
            // {
            //     staffName: "Viji"
            // },
            // {
            //     staffName: "Subhaleka"
            // },
            // {
            //     staffName: "Raj"
            // },
            // {
            //     staffName: "Ishu"
            // }],
            // 'eee': [{
            //     staffName: "Krishni"
            // },
            // {
            //     staffName: "Kumar"
            // },
            // {
            //     staffName: "Latha kumari"
            // },
            // {
            //     staffName: " Rekha "
            // },
            // {
            //     staffName: " Akshaya"
            // },
            // {
            //     staffName: "Subhulakshmi"
            // },
            // {
            //     staffName: "Karthickraj"
            // },
            // {
            //     staffName: "Vishnu"
            // }],
            // 'civil': [{
            //     staffName: "Ethiraj"
            // },
            // {
            //     staffName: "chaya"
            // },
            // {
            //     staffName: "Varadhan"
            // },
            // {
            //     staffName: "Senapathi"
            // },
            // {
            //     staffName: "Dhevaraj"
            // },
            // {
            //     staffName: "Subhu"
            // },
            // {
            //     staffName: "Sudha"
            // },
            // {
            //     staffName: "Vimal"
            // }],
            // 'mech': [{
            //     staffName: "Thanisha"
            // },
            // {
            //     staffName: "Dharun"
            // },
            // {
            //     staffName: "Latha"
            // },
            // {
            //     staffName: "Siva kumar"
            // },
            // {
            //     staffName: "Lakshmi"
            // },
            // {
            //     staffName: "Rashmi"
            // },
            // {
            //     staffName: "Karthi"
            // },
            // {
            //     staffName: "Varsha"
            // }],
            // 'ece': [{
            //     staffName: "lekha"
            // },
            // {
            //     staffName: "Arthy"
            // },
            // {
            //     staffName: "Latha"
            // },
            // {
            //     staffName: "Premkumar"
            // },
            // {
            //     staffName: "Vijayalakshmi"
            // },
            // {
            //     staffName: "Subhulakshmi"
            // },
            // {
            //     staffName: "Karthickraj"
            // },
            // {
            //     staffName: "Vishnu"
            // }],
            // 'agri': [{
            //     staffName: "Subhulakshmi"
            // },
            // {
            //     staffName: "Krishnakumar"
            // },
            // {
            //     staffName: "Latha"
            // },
            // {
            //     staffName: "Premkumar"
            // },
            // {
            //     staffName: "Vijayalakshmi"
            // },
            // {
            //     staffName: "Subhulakshmi"
            // },
            // {
            //     staffName: "Karthickraj"
            // },
            // {
            //     staffName: "Vishnu"
            // }],
            // 'auto': [{
            //     staffName: "Karthickraj"
            // },
            // {
            //     staffName: "Krishnakumar"
            // },
            // {
            //     staffName: "Latha"
            // },
            // {
            //     staffName: "Premkumar"
            // },
            // {
            //     staffName: "Vijayalakshmi"
            // },
            // {
            //     staffName: "Subhulakshmi"
            // },
            // {
            //     staffName: "Karthickraj"
            // },
            // {
            //     staffName: "Vishnu"
            // }],
            // 'cse': [{
            //     staffName: "Vishnu"
            // },
            // {
            //     staffName: "Krishnakumar"
            // },
            // {
            //     staffName: "Latha"
            // },
            // {
            //     staffName: "Premkumar"
            // },
            // {
            //     staffName: "Vijayalakshmi"
            // },
            // {
            //     staffName: "Subhulakshmi"
            // },
            // {
            //     staffName: "Karthickraj"
            // },
            // {
            //     staffName: "Vishnu"
            // }]
        }

        console.log("faculty is", faculty[dept]);
        return faculty[dept];

    }
    catch (err) {
        throw boom.boomify(err);
    }
}

//login validation
exports.validateLoginCredential = async (req, res) => {
    try {
        // let isAdmin = false;
        const formData = req.body;
        //formData==> {registerNumber: "aaa", password: "bbb"}
        console.log("formData in this.checkLoginCredentials", formData);
        //api call to checkLoginCredentials and response=res(true or false)
        const userAccountDb = await USER.find();
        // const userAccountDb = [{ registerNumber: "aaa", password: "pw1" }, { registerNumber: "bbb", password: "pw2" }, { registerNumber: "ccc", password: "pw3" }]
        console.log("userAccountDb is", userAccountDb[0].user);
        const isUserDataExist = userAccountDb[0].user.filter(data => {
            console.log("data in filter is", data);
            if ((data.registerNumber == formData.registerNumber) && (data.password == formData.password)) {
                console.log("formdata is", formData);
                return true;
            }
            else {
                return false;
            }
        });
        console.log("isUserDataExist.length", isUserDataExist.length);

        // if (isUserDataExist.length == 1) {
        //     if (formData.registerNumber == 'Admin') {
        //         isAdmin = true;
        //     }
        // }

        return {
            responseStatus: isUserDataExist.length == 1,
            isAdmin: formData.registerNumber == 'admin'
        }
    } catch (err) {
        throw boom.boomify(err);
    }
}

//admin
exports.adminValidation = async (req, res) => {
    try {

        const adminTestDb = new ADMIN(req.body)
        await adminTestDb.save()
        return {
            responseStatus: true
        }

    } catch (err) {
        throw boom.boomify(err);
    }
}

//fetch admin details
exports.retriveAdmin = async (req, res) => {
    try {
        const adminTestDb = new ADMIN({ 'admin': "true" })

        const adminDetails = await ADMIN.find();
        // let len=adminDetails.length-1;
        console.log("adminDetails is", adminDetails)

        return {
            responseStatus: true,
            adminData: adminDetails
        }
    } catch (err) {
        throw boom.boomify(err);
    }
}

//field data
exports.fieldSave = async (req, res) => {
    try {

        const adminTestDb = new FIELD(req.body)
        await adminTestDb.save()
        return {
            responseStatus: true
        }

    } catch (err) {
        throw boom.boomify(err);
    }
}

//fetch field details
exports.retriveField = async (req, res) => {
    try {
        const adminTestDb = new FIELD({ 'admin': "true" })

        const adminDetails = await FIELD.find();
        // let len=adminDetails.length-1;
        console.log("adminDetails is", adminDetails)

        return {
            responseStatus: true,
            fieldData: adminDetails
        }
    } catch (err) {
        throw boom.boomify(err);
    }
}