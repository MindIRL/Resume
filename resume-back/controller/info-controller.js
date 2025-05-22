// const slugify = require("slugify")
const Informations = require("../models/schema")
const {v4:uuidv4} = require("uuid")






exports.create = (req , res) => {
    const{age,weight,github,FrontEndknowledge,BackEndknowledge,experience,anotherSkills,admin} = req.body
    let slug = uuidv4()

    Informations.create({age,weight,github,FrontEndknowledge,BackEndknowledge,experience,anotherSkills,admin,slug},(err,info)=>{
        if(err){
            res.status(400).json({error:"ไม่สามารถบันทึกข้อมูลได้"})
            console.log(err)
        }
        res.json(info)
    })
}

exports.getAllinfo = (req , res) => {
    Informations.find({}).exec((err,info)=>{
        if(err){
            res.status(400).json({error:"ไม่สามารถเรียกข้อมูลทั้งหมดได้"})
            console.log(err)
        }
        res.json(info)
    })
}

exports.singleInfo = (req , res) => {
    const {slug} = req.params
    Informations.findOne({slug}).exec((err,info)=>{
        if(err){
            res.status(400).json({error:"ไม่พบข้อมูลที่ค้นหา"})
            console.log(err)
        }
        res.json(info)
    })
}

exports.updateInfo = (req , res) => {
    const {slug} = req.params
    const {age,weight,github,FrontEndknowledge,BackEndknowledge,experience,anotherSkills,admin} = req.body
    Informations.findOneAndUpdate({slug},{age,weight,github,FrontEndknowledge,BackEndknowledge,experience,anotherSkills,admin},{new:true}).exec((err,info)=>{
        if(err){
            res.status(400).json({error:"ไม่สามารถแก้ไขข้อมูลได้"})
        }
        res.json(info)

    })
}