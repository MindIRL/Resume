const {Work} = require("../models/schema")
const {v4:uuidv4} = require("uuid")

//ประสบการณ์การทำงาน

//สร้างข้อมูล
exports.createWork = (req , res) => {
    const {company, position , province , location , WorkingTime , WorkDetails , ImageURL} = req.body
    let slug = uuidv4()
    
    const Data = {company, position , province , location , WorkingTime , WorkDetails , ImageURL, slug }

    req.file ? Data.ImageFile = {data:req.file.buffer , contentType:req.file.mimetype} : null

    Work.create(Data ,(err , info)=>{
        if(err){
            console.log(err)
            return res.status(400).json({error:"ไม่สามารถบันทึกข้อมูลได้"})
        }
        res.json(info)
    })
}

//ดึงข้อมูลทั้งหมด
exports.getAllWorkinfo = (req , res) =>{
    Work.find({}).exec((err , info)=>{
        if(err){
            console.log(err)
            return res.status(400).json({error:"ไม่สามารถดึงข้อมูลทั้งหมดได้"})
        }
        res.json(info)
    })
}

//ดึงข้อมูลอันเดียว
exports.singleWorkInfo = (req , res) => {
    const {slug} = req.params
    Work.findOne({slug}).exec((err,info) => {
        if(err){
            console.log(err)
            return res.status(400).json({error:"ไม่สามารถดึงข้อมูลนี้ได้"})
        }
        res.json(info)
    })
}


//อัพเดพข้อมูล
exports.updateWorkInfo = (req , res) => {
    const {slug} = req.params
    const{company, position , province , location , WorkingTime , WorkDetails , ImageURL} = req.body

    const Data = {company, position , province , location , WorkingTime , WorkDetails , ImageURL}

    req.file ? Data.ImageFile = {data:req.file.buffer , contentType:req.file.mimetype} : null

    Work.findOneAndUpdate({slug},Data,{new:true}).exec((err , info) =>{
        if(err){
            console.log(err)
            return res.status(400).json({error:"ไม่สามารถอัพเดทข้อมูลได้"})
        }
        res.json(info)
    })
}

