import { useState, useEffect  } from "react"
import axios from "axios"
import { getToken } from "../../services/authorize"

const WorkForm = () =>{


    const [FormWork , SetFormWork] = useState({
         company:"" ,
         position:"" ,
         province:"" ,
         location:"" ,
         WorkingTime:"" ,
         ImageURL:"" ,
         ImageFile:null ,
         WorkDetails:[""]
    })

    const WorkInput = (e , index=null) =>{
        const {name , value , type ,files } = e.target
        if(name === "WorkDetails" && index !== null ){
            SetFormWork((prev)=>{
            const newDetails = [...prev.WorkDetails]
            newDetails[index] = value
            return ({...prev , WorkDetails:newDetails })
            })
        }else{
            SetFormWork((prev)=>({...prev , [name]: type === "file" ? files[0] :value}))
        }

    }

    const WorkSubmit = () =>{
        const formData = new FormData()
        for(let key in FormWork){
            if(key === "WorkDetails"){
                formData.append(key, JSON.stringify({experiences:FormWork[key]}) )
            }else{
                formData.append(key,FormWork[key])
            }
            
        }

        // axios.post(`${process.env.REACT_APP_API_URL}create-Work-info` , formData , {headers:{ "Content-Type": "multipart/form-data"}})
        axios.post(`${process.env.REACT_APP_API_URL}create-Work-info` , formData , {headers:{Authorization:`bearer ${getToken()}`}})
    }


    const addInfo = () => { 
            SetFormWork((prev)=>({...prev , WorkDetails:[...prev.WorkDetails , ""]}))
    
    }

    const removeInfo = () => {
        SetFormWork((prev)=>{
            if(prev.WorkDetails.length <= 1){
                return prev
            }
            const newWorkDetails = [...prev.WorkDetails]
            newWorkDetails.pop()
            return {...prev,WorkDetails:newWorkDetails}
        })
    }

    useEffect(()=>{
        console.log(FormWork.WorkDetails)

    },[FormWork.WorkDetails])
    return(
        <div className="box-form">
            <div className="title-form">ประสบการณ์การทำงาน</div>
                <form onSubmit={WorkSubmit}>
                    <div>
                        <label>บริษัท</label>
                        <input name="company" value={FormWork.company} onChange={WorkInput}/>
                    </div>
                    <div>
                        <label>ตำแหน่ง</label>
                        <input name="position" value={FormWork.position} onChange={WorkInput}/>
                    </div>
                    <div>
                        <label>จังหวัด</label>
                        <input name="province" value={FormWork.province} onChange={WorkInput}/>
                    </div>
                    <div>
                        <label>สถานที่</label>
                        <input name="location" value={FormWork.location} onChange={WorkInput}/>
                    </div>
                    <div>
                        <label>ช่วงเวลาที่ทำงาน</label>
                        <input name="WorkingTime" value={FormWork.WorkingTime} onChange={WorkInput} />
                    </div>
                    <div>
                        <label>Image URL</label>
                        <input placeholder="URL ใส่ช่องนี้" name ="ImageURL" value={FormWork.ImageURL} onChange={WorkInput}/>
                        <div>
                            <input type="file" name="ImageFile"  onChange={WorkInput}/>
                        </div>
                    </div>
                    <div>
                        <label>รายละเอียดการทำงาน (คลิก + , - เพิ่มเพิ่ม ลบ ข้อมูล)</label>
                        <ol>
                            {FormWork.WorkDetails.map((info , idx)=>(
                                <li key={idx}><input placeholder="คลิก + เพิ่มรายการ , - ลบรายการ" name="WorkDetails" value={info} onChange={(e)=>{WorkInput(e , idx)}}/></li>
                            ))}
                           <span><i className="fa-solid fa-square-plus" onClick={()=>addInfo()}></i>{FormWork.WorkDetails.length >1 && <i className="fa-solid fa-minus" onClick={()=>removeInfo()}></i>}</span>
                        </ol>
                    </div>
                    <input type="submit" value="บันทุกข้อมูล"/>
                </form>
        </div>
    )
}

export default WorkForm

                           {/* <li><input placeholder="คลิก + เพิ่มรายการ" name="WorkDetails" value={FormWork.WorkDetails} onChange={WorkInput}/></li>
                            <li><input placeholder="คลิก + เพิ่มรายการ , - ลบรายการ" name="WorkDetails" value={FormWork.WorkDetails} onChange={WorkInput}/></li>
                            <li><input placeholder="คลิก + เพิ่มรายการ , - ลบรายการ" name="WorkDetails" value={FormWork.WorkDetails} onChange={WorkInput}/></li> */}