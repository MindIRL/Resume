const express = require("express")
const router = express.Router()
const {create , getAllinfo , singleInfo , updateInfo , deleteSingleInfo} = require("../controller/Personal-controller")
const {createWork , getAllWorkinfo , singleWorkInfo , updateWorkInfo , DeleteSingleWorkInfo} = require("../controller/Work-controller")
const{createKnowledge , getAllKnowledgeInfo , singleKnowledgeInfo , updateKnowledgeInfo , DeleteSingleKnowledgeInfo } = require("../controller/Knowledge-controller")
const upload = require("../Image/multer");
const {requireLogin} = require("../controller/auth-controller")


//PersonalInfo
router.post('/create-Personal-info' , requireLogin , upload.fields([{name:"ResumeFile" , maxCount:1},{name:"ImageFile" , maxCount:1}]) , create)
router.get('/informations' , getAllinfo)
router.get('/one-information/:slug' , singleInfo)
router.delete('/delete-one-information/:slug' , requireLogin , deleteSingleInfo )
router.put('/update-information/:slug', requireLogin , upload.fields([{name:"ResumeFile" , maxCount:1},{name:"ImageFile" , maxCount:1}]) , updateInfo)


//Work
router.post('/create-Work-info', requireLogin , upload.single("ImageFile"), createWork )
router.get('/Workinformations' , getAllWorkinfo)
router.get('/Work-one-information/:slug'  , singleWorkInfo)
router.delete('/delete-work-one-information/:slug' , requireLogin , DeleteSingleWorkInfo )
router.put('/Work-update-information/:slug' , requireLogin , upload.single("Image") , updateWorkInfo)

//Knowledge
router.post('/create-Knowledge-info', requireLogin , upload.none(), createKnowledge)
router.get('/Knowledgeinformations' , getAllKnowledgeInfo)
router.get('/Knowledge-one-information/:slug' , singleKnowledgeInfo)
router.delete('/delete-knowledge-one-information/:slug' , requireLogin , DeleteSingleKnowledgeInfo )
router.put('/Knowledge-update-information/:slug', requireLogin ,upload.none(), updateKnowledgeInfo)









module.exports = router