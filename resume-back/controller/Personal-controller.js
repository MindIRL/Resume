// const slugify = require("slugify")
const {Personal} = require("../models/schema")
const {v4:uuidv4} = require("uuid")


// ข้อมูลส่วนตัว

//สร้างข้อมูล
exports.create = async (req , res) => {
    const{nationality,age,weight,height,github} = req.body
    let slug = uuidv4()

    const Data = {nationality,age,weight,height,github,slug}

    const ResumeFile = req.file ? {
        data: req.file.buffer,
        contentType: req.file.mimetype,
      }
    : undefined;

    if(ResumeFile){
        Data.ResumeFile = ResumeFile
    }

    try{
        const Info = await Personal.create(Data)
        res.json(Info)
    }
    catch(err) {
        if(err){
            console.log(err)
            return res.status(400).json({error:"ไม่สามารถบันทึกข้อมูลได้"})
        }
    }

        
  
}

//ดึงข้อมูลทั้งหมด
exports.getAllinfo = (req , res) => {
    Personal.find({}).exec((err,info)=>{
        if(err){
            console.log(err)
            return res.status(400).json({error:"ไม่สามารถเรียกข้อมูลทั้งหมดได้"})
        }
        res.json(info)
    })
}

//ดึงข้อมูลอันเดียว
exports.singleInfo = (req , res) => {
    const {slug} = req.params
    Personal.findOne({slug}).exec((err,info)=>{
        if(err){
            console.log(err)
            return res.status(400).json({error:"ไม่พบข้อมูลที่ค้นหา"})
        }
        res.json(info)
    })
}

//อัพเดพข้อมูล
exports.updateInfo = (req , res) => {
    const {slug} = req.params
    const {nationality,age,weight,height,github} = req.body

    const ResumeFile = req.file ?
        {data:req.file.buffer ,
         contentType:req.file.mimetype
        }
        :
    Personal.findOneAndUpdate({slug},{nationality,age,weight,height,github,ResumeFile},{new:true}).exec((err,info)=>{
        if(err){
            console.log(err)
            return res.status(400).json({error:"ไม่สามารถแก้ไขข้อมูลได้"})
        }
        res.json(info)

    })
}