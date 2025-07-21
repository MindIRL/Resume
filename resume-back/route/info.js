const express = require("express")
const router = express.Router()
const {create , getAllinfo , singleInfo , updateInfo , deleteSingleInfo} = require("../controller/Personal-controller")
const {createWork , getAllWorkinfo , singleWorkInfo , updateWorkInfo , DeleteSingleWorkInfo} = require("../controller/Work-controller")
const{createKnowledge , getAllKnowledgeInfo , singleKnowledgeInfo , updateKnowledgeInfo , DeleteSingleKnowledgeInfo } = require("../controller/Knowledge-controller")
const upload = require("../Image/multer");


//PersonalInfo
router.post('/create-Personal-info' , upload.single("ResumeFile") , create)
router.get('/informations' , getAllinfo)
router.get('/one-information/:slug' , singleInfo)
router.delete('/delete-one-information/:slug' , deleteSingleInfo )
router.put('/update-information/:slug', upload.single("ResumeFile") , updateInfo)


//Work
router.post('/create-Work-info', upload.single("ImageFile"), createWork )
router.get('/Workinformations' , getAllWorkinfo)
router.get('/Work-one-information/:slug' , singleWorkInfo)
router.delete('/delete-work-one-information/:slug' , DeleteSingleWorkInfo )
router.put('/Work-update-information/:slug' , upload.single("Image") , updateWorkInfo)

//Knowledge
router.post('/create-Knowledge-info' , upload.none(), createKnowledge)
router.get('/Knowledgeinformations' , getAllKnowledgeInfo)
router.get('/Knowledge-one-information/:slug' , singleKnowledgeInfo)
router.delete('/delete-knowledge-one-information/:slug' , DeleteSingleKnowledgeInfo )
router.put('/Knowledge-update-information/:slug',upload.none(), updateKnowledgeInfo)









module.exports = router