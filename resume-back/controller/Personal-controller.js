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
    
    console.log(req.file)

    if(ResumeFile){
        Data.ResumeFile = ResumeFile
    }

    try{
        const Info = await Personal.create(Data)
        return res.json(Info)
    }
    catch(err) {
        if(err){
            console.log(err)
            return res.status(400).json({error:"ไม่สามารถบันทึกข้อมูลได้"})
        }
    }

        
  
}

//ดึงข้อมูลทั้งหมด
exports.getAllinfo = async (req , res) => {

    try{
        const Info = await Personal.find({})
        return res.json(Info)
    }
    catch(err){
        console.log(err)
        return res.status(400).json({error:"ไม่สามารถเรียกข้อมูลทั้งหมดได้"})
    }

}

//ดึงข้อมูลอันเดียว
exports.singleInfo = async (req , res) => {
    const {slug} = req.params

    try{
        const Info = await Personal.findOne({slug})

        if(!Info){
            return res.status(404).json({message:"ไม่พบข้อมูลที่ค้นหา"})
        }else{
            return res.status(200).json(Info)
        }
        
    }
    catch(err){
        console.log(err)
        return res.status(400).json({error:"ไม่พบข้อมูลที่ค้นหา"})
    }

}

//ลบข้อมูล
exports.deleteSingleInfo = async (req , res)  => {
    const {slug} = req.params

    try{
        const Info = await Personal.findOneAndDelete({slug})
        if(!Info){
            return res.status(404).json({message:"ไม่พบข้อมูลที่ต้องการลบ"})
        }else{
            return res.status(200).json({message:"ลบข้อมูลสำเร็จ" , data:Info})
        }        
    }
    catch(err){
        console.log(err)
        return res.status(400).json({error:"ลบข้อมูลไม่สำเร็จ"})
    }
}

//อัพเดพข้อมูล
exports.updateInfo = async (req , res) => {
    const {slug} = req.params
    const {nationality,age,weight,height,github} = req.body

    const ResumeFile = req.file ?
        {data:req.file.buffer ,
         contentType:req.file.mimetype
        }
        : null

    const Data = {nationality,age,weight,height,github}

    if(ResumeFile){
        Data.ResumeFile = ResumeFile
    }
    
    try{
        const Info = await Personal.findOneAndUpdate({slug},Data,{new:true})
        if(!Info){
            return res.status(404).json({message:"ไม่พบข้อมูลที่ต้องการแก้ไข"})
        }else{
            return res.status(200).json({message:"อัพเดทข้อมูลสำเร็จ" , data:Info}) 
        }       
    }
    catch(err) {
        console.log(err)
        return res.status(400).json({error:"ไม่สามารถแก้ไขข้อมูลได้"})
    }

}