import "../style/introduction.css"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios"
import "@fortawesome/fontawesome-free/css/all.min.css";
import {getUsername} from "../services/authorize"


const Introduction = ({GetNavHeight}) => {

    const [GetInfo , SetInfo] = useState([])

    const [ImageURLs , SetImageURLs] = useState({})

    const Navigate = useNavigate()

    const EditForm = (slug) =>{
            Navigate(`/Edit-form/${slug}`)
    }

    const downloadResume = (ResumeFile) =>{
        if(!ResumeFile?.data?.data) return

        const byteArray = new Uint8Array(ResumeFile.data.data)
        const blob = new Blob([byteArray],{
            type:ResumeFile.contentType ,
        })
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement("a")
        a.href = url

        //ชื่อไฟล์ดาวโหลด
        let filename = "Resume"

        if(ResumeFile.contentType.includes("pdf")){
            filename += ".pdf"
        }else if (ResumeFile.contentType.includes("spreadsheet") || ResumeFile.contentType.includes("excel") ) {
            filename += ".xlsx"
        }else{
            filename += ".file"
        }

        //ชื่อไฟล์ดาวโหลด
        a.download = filename

        document.body.appendChild(a)
        a.click()
        a.remove()

        window.URL.revokeObjectURL(url)
    }

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API_URL}informations`)
        .then((info)=>{
            console.log("ดึงข้อมูลสำเร็จ" , info)
            SetInfo(info.data)
        })
        .catch((err)=>{
            console.log("ดึงข้อมูลไม่สำเร็จ" , err)
        })
    },[])

    useEffect(()=>{
        if(GetInfo.length >0){
            const url = {}
            console.log(url)

            GetInfo.map((info)=>{
                if(info?.ImageFile?.data?.data){
                    const byteArray = new Uint8Array(info.ImageFile.data.data)
                    const blob = new Blob([byteArray] , {type: info.ImageFile.contentType})
                    const imageURL = URL.createObjectURL(blob)
                    url[info.slug] = imageURL
                }
            SetImageURLs(url)
            })
        }
    },[GetInfo])

    return(   
        <>
        {GetInfo.map((info , idx)=>(     
        <div className="container" style={{paddingTop:`${GetNavHeight+10}px`}}>           
            <div className="img">
                <img src={ImageURLs[info.slug]} alt=""/>
            </div>
                          
            <div className="info" key={idx}>
                <div>
                    <p>สวรรยา บุญประจวบ</p> 
                    <p>Sawanya Boonprajuab</p> 
                </div>
                <div className="personal-info">
                    <p>สัญชาติ : <span>{info.nationality}</span></p> 
                    <p>อายุ : <span>{info.age}</span>{getUsername() && (<i className="fa-solid fa-pen" onClick={(i)=>EditForm(info.slug)}></i>)}</p>
                    <p>น้ำหนัก : <span>{info.weight}</span>{getUsername() && (<i className="fa-solid fa-pen" onClick={()=>EditForm(info.slug)}></i>)}</p> 
                    <p>ส่วนสูง : <span>{info.height}</span>{getUsername() && (<i className="fa-solid fa-pen" onClick={()=>EditForm(info.slug)}></i>)}</p>
                    <p>GitHub <i className="fa-brands fa-github"></i> : <span><a href={`https://github.com/${info.github}`} target="_blank">{info.github}</a></span>{getUsername() && (<i className="fa-solid fa-pen" onClick={()=>EditForm(info.slug)}></i>)}</p> 
                </div>
                
                <div className="btn" >                  
                        <button onClick={()=>downloadResume(info.ResumeFile)}>Download Resume</button>                   
                </div>
                              
            </div>
            
        </div>
        ))}
        </>
    )
}


export default Introduction
