const JWT = require("jsonwebtoken")
var {expressjwt:expressjwt} = require("express-jwt")


exports.login = (req , res) =>{
    const {username , password} = req.body
    if(username === process.env.USERNAME && password === process.env.PASSWORD){
        const token = JWT.sign({username},process.env.JWT_SECRET,{expiresIn:"1d"})
        return res.json({token , username})
    }else {
        return res.status(400).json({error:"รหัสผ่านไม่ถูกต้อง"})
    }
}


exports.requireLogin = expressjwt({
    secret:process.env.JWT_SECRET ,
    algorithms:["HS256"] ,
    userProperty:"auth"
})

