import { useState , useEffect} from "react"
import { useParams } from "react-router-dom"
import axios from "axios"


const EditKnowledgeForm = () =>{

    const [FormKnowledge, SetKnowledge] = useState({
        FrontEnd:[""] ,
        BackEnd:[""]
    })

    const {slug} = useParams()


    const KnowledgeInput = (e , idx=null) =>{
        console.log(idx)
        const {value , name} = e.target
        SetKnowledge((prev)=>{
            const newDetail = [...prev[name]]
            newDetail[idx] = value
            return  ({...prev , [name]:newDetail})
        })
    }

    const addInfo = (e) =>{
        const name = e.target.dataset.name
        if(name === "FrontEnd"){
            SetKnowledge((prev)=>({...prev, FrontEnd : [...prev.FrontEnd , ""]}))
        }else if (name === "BackEnd"){
            SetKnowledge((prev)=>({...prev , BackEnd: [...prev.BackEnd , ""]}))
        }
    }

    const removeInfo = (e) =>{
        const name = e.target.dataset.name
        if(name === "FrontEnd") {
            SetKnowledge((prev)=>{
                const newDetail = [...prev.FrontEnd]
                newDetail.pop()
                
                return ({...prev , [name]:newDetail})
            })
        }else if(name === "BackEnd"){
         
            SetKnowledge((prev)=>{
                const newDetail = [...prev.BackEnd]
                newDetail.pop()
                return ({...prev , [name]:newDetail})
            })            
        }

    }

    const KnowledgeSubmit = (e) =>{
        e.preventDefault()
        const formData = new FormData()
        for(let key in FormKnowledge){
            formData.append(key , JSON.stringify({experiences:FormKnowledge[key]}))
        }
        
        axios.post(`${process.env.REACT_APP_API_URL}create-Knowledge-info` , formData , {headers:{ "Content-Type": "multipart/form-data"}})

    }

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API_URL}Knowledge-one-information/${slug}`)
        .then((info)=>{
            console.log("slug = ",slug,"ได้ข้อมูล",info)
        })
        .catch((err)=>{
            console.log("ไม่สามารถดึงข้อมูลได้" ,err)
        })
        
    },[])

    return (
        <div className="box-form">
            <div style={{width:"140%"}} className="title-form">ความรู้พื้นฐาน Front & Back End</div>
                <form onSubmit={KnowledgeSubmit} encType="multipart/form-data">
                    <div>
                        <label>Front End Developer</label>
                        <ol>
                            {FormKnowledge.FrontEnd.map((info , idx)=>(
                                <li key={idx}>
                                    <input placeholder="คลิก + เพิ่มรายการ , - ลบรายการ" name="FrontEnd" value={info} onChange={(e)=>KnowledgeInput(e , idx)}/>
                                </li>
                            ))}
                            <span><i className="fa-solid fa-square-plus" data-name="FrontEnd" onClick={addInfo}></i>{FormKnowledge.FrontEnd.length > 1  && <i className="fa-solid fa-minus" data-name="FrontEnd" onClick={removeInfo}></i>}</span>
                        </ol>
                    </div>
                    <div>
                        <label>Back End Developer</label>
                        <ol>
                            {FormKnowledge.BackEnd.map((info , idx) =>(
                                <li key={idx}>
                                    <input placeholder="คลิก + เพิ่มรายการ , - ลบรายการ" name="BackEnd" value={info} onChange={(e)=>KnowledgeInput(e , idx)}/>
                                </li>
                            ))}
                            
                            <span><i className="fa-solid fa-square-plus" data-name="BackEnd" onClick={addInfo}></i>{FormKnowledge.BackEnd.length >1 && <i className="fa-solid fa-minus" data-name = "BackEnd" onClick={removeInfo}></i>}</span>
                        </ol>
                    </div>
                    <input type="submit" value="บันทุกข้อมูล"/>
                </form>
        </div>
    )
}




export default EditKnowledgeForm