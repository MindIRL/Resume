const {Knowledge} = require("../models/schema")
const {v4:uuidv4} = require("uuid")


//ความรู้พื้นฐาน Front & Back End


//สร้างข้อมูล
exports.createKnowledge = async (req , res) =>{

    let slug = uuidv4()

    let FrontEnd = {}
    let BackEnd = {}

    try{
        FrontEnd = JSON.parse(req.body.FrontEnd) 
        BackEnd = JSON.parse(req.body.BackEnd)

        const Info = await Knowledge.create({FrontEnd , BackEnd , slug})
        return res.json(Info)
    }
    catch(err){
        console.log(err)
        return res.status(400).json({error:"ไม่สามารถบันทึกข้อมูลได้"})
    }
}

//ดึงข้อมูลทั้งหมด
exports.getAllKnowledgeInfo = async (req , res) =>{

    try{
        const Info = await Knowledge.find({})
        return res.json(Info)
    }
    catch(err){
        console.log(err)
        return res.status(400).json({error:'ไม่สามารถดึงข้อมูลทั้งหมดได้'})
    }

}

//ดึงข้อมูลอันเดียว
exports.singleKnowledgeInfo = async (req , res) =>{
    const {slug} = req.params

    try{
        const Info = await  Knowledge.findOne({slug})
        if(!Info){
            return res.status(404).json({message:"ไม่พบข้อมูลที่ค้นหา"})
        }else {
            return res.status(200).json(Info)
        }
    }
    catch(err){
        console.log(err)
        return res.status(400).json({error:"ไม่สามารถดึงข้อมูลได้"})
    }
    
}

//ลบข้อมูล
exports.DeleteSingleKnowledgeInfo = async (req , res) =>{
    const {slug} = req.params
    console.log("slug ที่รับมา:", typeof slug)

    try{
        const Info = await Knowledge.findOneAndDelete({slug})
        console.log("ผลลัพธ์จาก findOneAndDelete:", Info)
        if(!Info){
            return res.status(404).json({message:"ไม่พบข้อมูลที่ต้องการลบ"})
        }else{
            return res.status(200).json({message:"ลบข้อมูลเรียบร้อย" , data:Info})
        }
    }
    catch(err){
        console.log(err)
        return res.status(400).json({error:"ไม่สามารถลบข้อมูลที่ต้องการได้"})
    }


}

//อัพเดทข้อมูล
exports.updateKnowledgeInfo = async (req , res) =>{
    const {slug} = req.params
    
    let FrontEnd = {}
    let BackEnd = {}

    try{
        if(req.body.FrontEnd){
            FrontEnd = JSON.parse(req.body.FrontEnd)
        }
        
        if(req.body.BackEnd){
            BackEnd = JSON.parse(req.body.BackEnd)
        }

        
        const Info = await Knowledge.findOneAndUpdate({slug},{FrontEnd, BackEnd},{new:true})
        if(!Info){
            return res.status(404).json({message:"ไม่พบข้อมูลที่ต้องการอัพเดท"})
        }else {
            return res.status(200).json({message:"อัพเดทข้อมูลเรียบร้อย" , data:Info})
        }
    }
    catch(err){
        console.log(err)
        return res.status(400).json({error:"ไม่สามารถอัพเดทข้อมูลได้"})
    }
    
}