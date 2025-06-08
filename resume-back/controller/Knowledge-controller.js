const {Knowledge} = require("../models/schema")
const {v4:uuidv4} = require("uuid")


//ความรู้พื้นฐาน Front & Back End


//สร้างข้อมูล
exports.createKnowledge = (req , res) =>{
    const {FrontEnd, BackEnd} = req.body
    let slug = uuidv4()
    Knowledge.create({FrontEnd, BackEnd , slug},(err,info)=>{
        if(err){
            console.log(err)
            return res.status(400).json({error:"ไม่สามารถบันทึกข้อมูลได้"})
        }
        res.json(info)
    })
}

//ดึงข้อมูลทั้งหมด
exports.getAllKnowledgeInfo = (req , res) =>{
    Knowledge.find({}).exec((err , info)=>{
        if(err){
            console.log(err)
            return res.status(400).json({error:'ไม่สามารถดึงข้อมูลทั้งหมดได้'})
        }
        res.json(info)
    })
}

//ดึงข้อมูลอันเดียว
exports.singleKnowledgeInfo = (req , res) =>{
    const {slug} = req.params
    Knowledge.findOne({slug}).exec((err , info)=>{
        if(err){
            console.log(err)
            return res.status(400).json({error:"ไม่สามารถดึงข้อมูลได้"})
        }
        res.json(info)
    })
}

//อัพเดทข้อมูล
exports.updateKnowledgeInfo = (req , res) =>{
    const {slug} = req.params
    const {FrontEnd, BackEnd} = req.body
    Knowledge.findOneAndUpdate({slug},{FrontEnd, BackEnd},{new:true}).exec((err , info)=>{
        if(err){
            console.log(err)
            return res.status(400).json({error:"ไม่สามารถอัพเดทข้อมูลได้"})
        }
        res.json(info)
    })
}