const {Work} = require("../models/schema")
const {v4:uuidv4} = require("uuid")

//ประสบการณ์การทำงาน

//สร้างข้อมูล
exports.createWork = async (req , res) => {
    const {company, position , province , location , WorkingTime , WorkDetails , ImageURL} = req.body
    let slug = uuidv4()
    
    const Data = {company, position , province , location , WorkingTime , WorkDetails , ImageURL, slug }

    req.file ? Data.ImageFile = {data:req.file.buffer , contentType:req.file.mimetype} : null

    try{
        const Info = await Work.create(Data)
        return res.json(Info)
    }
    catch(err){
        console.log(err)
        return res.status(400).json({error:"ไม่สามารถบันทึกข้อมูลได้"})
    }
}

//ดึงข้อมูลทั้งหมด
exports.getAllWorkinfo = async (req , res) =>{

    try{
        const Info = await Work.find({})
        return res.json(Info)
    }
    catch(err){
        console.log(err)
        return res.status(400).json({error:"ไม่สามารถดึงข้อมูลทั้งหมดได้"})
    }

}

//ดึงข้อมูลอันเดียว
exports.singleWorkInfo = async (req , res) => {
    const {slug} = req.params

    try{
        const Info = await Work.findOne({slug})
        if(!Info){
            return res.status(404).json({message:"ไม่พบข้อมูลที่ค้นหา"})
        }else{
            return res.status(200).json(Info)
        }
        
    }
    catch(err){
        console.log(err)
        return res.status(400).json({error:"ไม่สามารถดึงข้อมูลนี้ได้"})
    }

}
//ลบข้อมูล
exports.DeleteSingleWorkInfo = async (req , res) =>{
    const {slug} = req.params

    try{
        const Info = await Work.findOneAndDelete({slug})
        if(!Info){
            return res.status(404).json({message:"ไม่พอข้อมูลที่ต้องการลบ"})
        }else {
            return res.status(200).json({message:"ลบข้อมูลสำเร็จ" , data:Info})
        }
    }
    catch(err){
        console.log(err)
        return res.status(400).json({error:"ไม่สามารถลบข้อมูลได้"})
    }
}

//อัพเดพข้อมูล
exports.updateWorkInfo = async (req , res) => {
    const {slug} = req.params
    const{company, position , province , location , WorkingTime , WorkDetails , ImageURL} = req.body

    const Data = {company, position , province , location , WorkingTime , WorkDetails , ImageURL}

    req.file ? Data.ImageFile = {data:req.file.buffer , contentType:req.file.mimetype} : null

    try{
        const Info = await Work.findOneAndUpdate({slug},Data,{new:true})

        if(!Info){
            return res.status(404).json({message:"ไม่พบข้อมูลที่ต้องการอัพเดท"})
        }else{
            return res.status(200).json(Info)
        }
        
    }
    catch(err){
        console.log(err)
        return res.status(400).json({error:"ไม่สามารถอัพเดทข้อมูลได้"})
    }

}

