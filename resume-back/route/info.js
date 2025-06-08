const express = require("express")
const router = express.Router()
const {create , getAllinfo , singleInfo , updateInfo} = require("../controller/Personal-controller")
const {createWork , getAllWorkinfo , singleWorkInfo , updateWorkInfo} = require("../controller/Work-controller")
const{createKnowledge , getAllKnowledgeInfo , singleKnowledgeInfo , updateKnowledgeInfo} = require("../controller/Knowledge-controller")
const upload = require("../Image/multer");


//PersonalInfo
router.post('/create-Personal-info' , upload.single("resume") , create)
router.get('/informations' , getAllinfo)
router.get('/one-information/:slug' , singleInfo)
router.put('/update-information/:slug' , updateInfo)


//Work
router.post('/create-Work-info', upload.single('image') , createWork )
router.get('/Workinformations' , getAllWorkinfo)
router.get('/Work-one-information/:slug' , singleWorkInfo)
router.put('/Work-update-information/:slug' , updateWorkInfo)

//Knowledge
router.post('/create-Knowledge-info' , createKnowledge)
router.get('/Knowledgeinformations' , getAllKnowledgeInfo)
router.get('/Knowledge-one-information/:slug' , singleKnowledgeInfo)
router.put('/Knowledge-update-information/:slug', updateKnowledgeInfo)









module.exports = router