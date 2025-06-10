const mongoose = require("mongoose")


const PersonalSchema = mongoose.Schema({
    nationality:{
        type:String ,
        require:false
    },
    age:{
        type:String ,
        required:false
    },
    weight:{
        type:String ,
        required:false
    },
    height:{
        type:String ,
        required:false
    },
    github:{
        type:String,
        required:false
    },
    ResumeFile:{
        data: Buffer,
        contentType: String 
    },
    slug:{
        type:String,
        lowercase:true,
        unique:true
    }


},{timestamps:true})


const WorkSchema = mongoose.Schema({
    company:{
        type:String,
        required:false
    },
    position:{
        type:String,
        required:false
    },
    province:{
        type:String,
        required:false
    },
    location:{
        type:String,
        required:false
    },
    WorkingTime:{
        type:String,
        required:false
    },
    ImageURL:{
        type:String
    } ,
    ImageFile :{
        data:Buffer ,
        contentType:String 
    }
    ,
    WorkDetails:{
        experiences: [{ type: String }] 
    },
    slug:{
        type:String,
        lowercase:true,
        unique:true
    }


},{timestamps:true})


const KnowledgeSchema = mongoose.Schema({
    FrontEnd:{
        experiences:[{type:String}]
    },
    BackEnd:{
        experiences:[{type:String}]
    },
    slug:{
        type:String,
        lowercase:true,
        unique:true
    }


},{timestamps:true})

const Personal = mongoose.model("PersonalSchema",PersonalSchema)
const Work = mongoose.model("WorkSchema" , WorkSchema)
const Knowledge = mongoose.model("KnowledgeSchema" , KnowledgeSchema)

module.exports = {
    Personal ,
    Work ,
    Knowledge
}