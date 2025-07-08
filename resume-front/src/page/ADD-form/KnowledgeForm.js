import { useState } from "react"
import axios from "axios"


const KnowledgeForm = () =>{

    const [FormKnowledge, SetKnowledge] = useState({
        FrontEnd:[""] ,
        BackEnd:[""]
    })


    const KnowledgeInput = (e , idx=null) =>{
        console.log(idx)
        const {value , name} = e.target
        SetKnowledge((prev)=>({...prev , [name]:[value]}))
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

    const KnowledgeSubmit = () =>{
        const formData = new FormData()
        for(let key in FormKnowledge){
            formData.append(key , JSON.stringify({experiences:formData[key]}))
        }
        
        axios.post(`${process.env.REACT_APP_API_URL}create-Knowledge-info` , formData , {headers:{ "Content-Type": "multipart/form-data"}})

    }

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
                            <span><i class="fa-solid fa-square-plus" data-name="FrontEnd" onClick={addInfo}></i>{FormKnowledge.FrontEnd.length > 1  && <i class="fa-solid fa-minus" data-name="FrontEnd" onClick={removeInfo}></i>}</span>
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
                            
                            <span><i class="fa-solid fa-square-plus" data-name="BackEnd" onClick={addInfo}></i>{FormKnowledge.BackEnd.length >1 && <i class="fa-solid fa-minus" data-name = "BackEnd" onClick={removeInfo}></i>}</span>
                        </ol>
                    </div>
                    <input type="submit" value="บันทุกข้อมูล"/>
                </form>
        </div>
    )
}




export default KnowledgeForm