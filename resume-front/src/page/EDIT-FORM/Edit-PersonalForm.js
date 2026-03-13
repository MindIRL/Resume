import { useEffect , useState ,useRef } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { getToken } from "../../services/authorize"


const EditPersonalForm = () =>{
    const FileInputValue = useRef(null)

   
    const [FormPersonal , SetFormPersonal] = useState({
        nationality:"" , 
        age:"" , 
        weight:"" ,
        height:"" , 
        github:"" ,
        ResumeFile:null
    })

    const {slug} = useParams()

    // ฟอร์ม Personal Input
    const PersonalInput = (e) =>{
        const{name , value , type , files} = e.target
        console.log(e.target.files)
        console.log(`มีการเปลี่ยนแปลงค่าในแบบฟร์อม ${name} ${value}`)
        SetFormPersonal((prev)=>({...prev , [name]: type === "file" ? files[0] : value}))        
    }


    // Submit ฟอร์ม Personal
    const PersonalSubmit = (e) =>{
        e.preventDefault()
        const formData = new FormData()

        for(let key in FormPersonal){
            formData.append(key , FormPersonal[key])
        }

        // axios.put(`${process.env.REACT_APP_API_URL}update-information/${slug}`, formData ,{headers: { "Content-Type": "multipart/form-data"}})
        axios.put(`${process.env.REACT_APP_API_URL}update-information/${slug}`, formData ,{headers: { Authorization: `Bearer ${getToken()}`}})
        .then((res)=>{
            console.log("ข้อมูลสำเร็จ" , res)

            SetFormPersonal({
            nationality:"" , 
            age:"" , 
            weight:"" ,
            height:"" , 
            github:"" ,
            ResumeFile:null ,
            ImageFile:null
        }) 
        if(FileInputValue.current){
            console.log(FileInputValue.current.value)
            FileInputValue.current.value = ""
        }     

        })
        .catch((err)=>{
            console.log("ไม่สามารถบันทึกได้" , err)
        })
    }


    useEffect(() => {
        console.log(FormPersonal);
    }, [FormPersonal]); 

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API_URL}one-information/${slug}`)
        .then((info)=>{
            console.log("slug = ",slug,"ได้ข้อมูล",info)
            SetFormPersonal(info.data)
        })
        .catch((err)=>{
            console.log("ไม่สามารถดึงข้อมูลได้" ,err)
        })
        
    },[])

    return(
            <div className="box-form">
                <div className="title-form">ข้อมูลส่วนตัว</div>
                <form onSubmit={PersonalSubmit} enctype="multipart/form-data">
                    <div>
                        <label>สัญชาติ</label>
                        <input  name="nationality" value={FormPersonal.nationality} onChange={PersonalInput}/>
                    </div>
                    <div>
                        <label>อายุ</label>
                        <input name="age" value={FormPersonal.age}onChange={PersonalInput}/>
                    </div>
                    <div>
                        <label>น้ำหนัก</label>
                        <input name="weight" value={FormPersonal.weight} onChange={PersonalInput}/>
                    </div>
                    <div>
                        <label>ส่วนสูง</label>
                        <input name="height" value={FormPersonal.height} onChange={PersonalInput}/>
                    </div>
                    <div>
                        <label>GitHub</label>
                        <input name="github" value={FormPersonal.github} onChange={PersonalInput}/>
                    </div>
                    <div>
                        <label>Resume File</label>
                        <input type="file" name="ResumeFile" ref={FileInputValue} onChange={PersonalInput}/>
                    </div>
                    <div>
                        <label>Image File</label>
                        <input type="file" name="ImageFile" ref={FileInputValue} onChange={PersonalInput}/>
                    </div>
                    <input type="submit" value="บันทุกข้อมูล"/>
                </form>
            </div>

    )
}

export default EditPersonalForm