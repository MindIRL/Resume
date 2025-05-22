const express = require("express")
const router = express.Router()
const {create , getAllinfo , singleInfo , updateInfo} = require("../controller/info-controller")





router.post('/create-information', create)
router.get('/informations' , getAllinfo)
router.get('/one-information' , singleInfo)
router.put('/update-information' , updateInfo)






module.exports = router