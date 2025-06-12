import Nav from "../component/Nav"
import "../style/add-form.css"
import { useState , useRef , useEffect } from "react"
import axios from "axios"


const AddForm = () => {
    const NavHeight = useRef(null);

    const [GetNavHeight , SetNavHeight] = useState()
    const [FormPersonal , SetFormPersonal] = useState({
        nationality:"" , 
        age:"" , 
        weight:"" ,
        height:"" , 
        github:"" ,
        ResumeFile:null
    })

    const PersonalInput = (e) =>{
        const{name , value , type , files} = e.target
        console.log(e.target.files)
        SetFormPersonal((prev)=>({...prev , [name]: type === "file" ? files[0] : value}))
        
    }


    useEffect(()=>{
        if(NavHeight){
            SetNavHeight(NavHeight.current.offsetHeight)
        }

    },[])

    useEffect(() => {
        console.log(FormPersonal);
    }, [FormPersonal]); 


    const Personal = (e) =>{
        e.preventDefault()
        const formData = new FormData()

        for(let key in FormPersonal){
            formData.append(key , FormPersonal[key])
        }


        axios.post(`${process.env.REACT_APP_API_URL}create-Personal-info`, formData ,{headers: { "Content-Type": "multipart/form-data"}})
        .then((res)=>{
            console.log("ข้อมูลสำเร็จ" , res)
        })
        .catch((err)=>{
            console.log("ไม่สามารถบันทึกได้" , err)
        })

        SetFormPersonal({
        nationality:"" , 
        age:"" , 
        weight:"" ,
        height:"" , 
        github:"" ,
        ResumeFile:null
    })        
    }

    return(
        <div style={{paddingTop:`${GetNavHeight+30}px`}}>
            <Nav NavHeight = {NavHeight}/>
            <div className="form-container">
                <div className="box-form">
                    <div className="title-form">ข้อมูลส่วนตัว</div>
                    <form onSubmit={Personal} enctype="multipart/form-data">
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
                            <input type="file" name="ResumeFile" onChange={PersonalInput}/>
                        </div>
                        <input type="submit" value="บันทุกข้อมูล"/>
                    </form>
                </div>



                <div className="box-form">
                    <div className="title-form">ประสบการณ์การทำงาน</div>
                    <form>
                        <div>
                            <label>บริษัท</label>
                            <input />
                        </div>
                        <div>
                            <label>ตำแหน่ง</label>
                            <input />
                        </div>
                        <div>
                            <label>จังหวัด</label>
                            <input />
                        </div>
                        <div>
                            <label>สถานที่</label>
                            <input />
                        </div>
                        <div>
                            <label>ช่วงเวลาที่ทำงาน</label>
                            <input />
                        </div>
                        <div>
                            <label>Image URL</label>
                            <input placeholder="URL ใส่ช่องนี้"/>
                            <div>
                                <input type="file" name="Image"/>
                            </div>
                        </div>
                        <div>
                            <label>รายละเอียดการทำงาน</label>
                            <ol>
                                <li><input placeholder="คลิก + เพิ่มรายการ"/></li>
                                <li><input placeholder="คลิก + เพิ่มรายการ , - ลบรายการ"/></li>
                                <li><input placeholder="คลิก + เพิ่มรายการ , - ลบรายการ"/></li>
                                <span><i class="fa-solid fa-square-plus"></i><i class="fa-solid fa-minus"></i></span>
                            </ol>
                        </div>
                        <input type="submit" value="บันทุกข้อมูล"/>
                    </form>
                </div>


                <div className="box-form">
                    <div style={{width:"140%"}} className="title-form">ความรู้พื้นฐาน Front & Back End</div>
                    <form>
                        <div>
                            <label>Front End Developer</label>
                            <ol>
                                <li><input placeholder="คลิก + เพิ่มรายการ"/></li>
                                <li><input placeholder="คลิก + เพิ่มรายการ , - ลบรายการ"/></li>
                                <li><input placeholder="คลิก + เพิ่มรายการ , - ลบรายการ"/></li>
                                <span><i class="fa-solid fa-square-plus"></i><i class="fa-solid fa-minus"></i></span>
                            </ol>
                        </div>
                        <div>
                            <label>Back End Developer</label>
                            <ol>
                                <li><input placeholder="คลิก + เพิ่มรายการ"/></li>
                                <li><input placeholder="คลิก + เพิ่มรายการ , - ลบรายการ"/></li>
                                <li><input placeholder="คลิก + เพิ่มรายการ , - ลบรายการ"/></li>
                                <span><i class="fa-solid fa-square-plus"></i><i class="fa-solid fa-minus"></i></span>
                            </ol>
                        </div>
                        <input type="submit" value="บันทุกข้อมูล"/>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default AddForm