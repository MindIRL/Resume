const express = require("express")
const router = express.Router()
const {create} = require("../controller/info-controller")





router.get('/information', create)
















module.exports = router