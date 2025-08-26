import "../style/introduction.css"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios"
import "@fortawesome/fontawesome-free/css/all.min.css";


const Introduction = ({GetNavHeight}) => {

    const [GetInfo , SetInfo] = useState([])

    const Navigate = useNavigate()

    const LoginPage = () =>{
            Navigate("/Edit-form")
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

    return(        
        <div className="container" style={{paddingTop:`${GetNavHeight+10}px`}}>
            <div className="img">
                <img src="https://i.pinimg.com/236x/5c/bb/04/5cbb0499aa8a3149e20dc0c5b869a548.jpg" alt=""/>
            </div>
            {GetInfo.map((info , idx)=>(               
            <div className="info" key={idx}>
                <div>
                    <p>สวรรยา บุญประจวบ</p> 
                    <p>Sawanya Boonprajuab</p> 
                </div>
                <div className="personal-info">
                    <p>สัญชาติ : <span>{info.nationality}</span></p> 
                    <p>อายุ : <span>{info.age}</span><i className="fa-solid fa-pen" onClick={LoginPage}></i></p>
                    <p>น้ำหนัก : <span>{info.weight}</span><i className="fa-solid fa-pen" onClick={LoginPage}></i></p> 
                    <p>ส่วนสูง : <span>{info.height}</span><i className="fa-solid fa-pen" onClick={LoginPage}></i></p>
                    <p>GitHub <i className="fa-brands fa-github"></i> : <span>{info.github}</span><i className="fa-solid fa-pen" onClick={LoginPage}></i></p> 
                </div>
                <div className="btn">
                    <a href="https://www.youtube.com/" target="blank_"download>
                        <button>Download Resume</button>
                    </a>
                </div>
            </div>
            ))}
        </div>
        
        
    )
}


export default Introduction
