const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()
const info_route = require("./route/info")
const auth_routh = require('./route/auth')




const app = express()

mongoose.set('strictQuery', false)

mongoose.connect(process.env.DATABASE)
.then(()=>console.log("เชื่อมต่อฐานข้อมูลสำเร็จ"))
.catch((err)=>console.log("ไม่สามารถเชื่อมต่อฐานข้อมูลได้",err))



app.use(express.json())
app.use(cors())
app.use(morgan("dev"))



app.use("/api" , info_route)
app.use('/api' , auth_routh)







port = process.env.PORT || 5500

app.listen(port , ()=>{
    console.log("start server in port" , port)
})