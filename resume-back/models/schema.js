const mongoose = require("mongoose")


const schema = mongoose.Schema({
    age:{
        type:String ,
        required:false
    },
    weight:{
        type:String ,
        required:false
    },
    github:{
        type:String,
        required:false
    },
    FrontEndknowledge:{
        type:String,
        required:false
    },
    BackEndknowledge:{
        type:String,
        required:false
    },
    experience:{
        type:String,
        required:false
    },
    anotherSkills:{
        type:String,
        required:false
    },
    admin:{
        type:String,
        default:"MindIRL"
    },
    slug:{
        type:String,
        lowercase:true,
        unique:true
    }


},{timestamps:true})


module.exports = mongoose.model("informations",schema)