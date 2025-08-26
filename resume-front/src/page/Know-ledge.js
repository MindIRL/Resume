import Nav from "../component/Nav"
import "../style/know-ledge.css"
import { useEffect , useState , useRef } from "react"
import { useNavigate } from "react-router-dom"
import axios  from "axios"
import Swal from "sweetalert2"

const Knowledge = () => {
    const NavHeight = useRef(null)

    const [GetNavHeight , SetNavHeight] = useState(null)
    const [GetInfo , SetInfo] = useState([])

    const Naigate = useNavigate()

    useEffect(()=>{
        if(NavHeight.current){
            SetNavHeight(NavHeight.current.offsetHeight)
        }
    },[])

    const EditForm = () =>{
        Naigate("/Edit-form")
    }

    const refreshData = () =>{
        axios.get(`${process.env.REACT_APP_API_URL}Knowledgeinformations`)
        .then((res)=>{
            console.log("ดึงข้อมูลสำเร็จ")
            SetInfo(res.data)
        })
        .catch((err)=>{
            console.log("ดึงข้อมูลไม่สำเร็จสำเร็จ" , err)
        })
    }

    const removeInfo = (slug) =>{
        if(slug){       
            Swal.fire({
                title: "คุณต้องการลบข้อมูลใช้ใหม?",
                // text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#30d63eff",
                cancelButtonColor: "#d33",
                cancelButtonText:"ยกเลิก" ,
                confirmButtonText: "ตกลง" 
            }).then((result)=>{
                if (result.isConfirmed) {
                axios.delete(`${process.env.REACT_APP_API_URL}delete-knowledge-one-information/${slug}`)
                .then((res)=>{
                    console.log("ลบข้อมูลสำเร็จ" , res)
                    Swal.fire({
                        title: "ลบข้อมูล!",
                        text: "ลบข้อมูลเรียบร้อย",
                        icon: "success"
                        });
                        refreshData()
                    }) 
                    .catch((err)=>{
                        console.log("ลบข้อมูลไม่สำเร็จ" , err)
                        Swal.fire({
                            title: "ลบข้อมูลไม่สำเร็จ!",
                            text: "กรุณาลองใหม่อีกครั้ง",
                            icon: "warning"
                            });
                        })
            }})
        }
    }
        

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API_URL}Knowledgeinformations`)
        .then((info)=>{
            console.log("ดึงข้อมูลสำเร็จ" , info)
            SetInfo(info.data)
        })
        .catch((err)=>{
            console.log("ดึงข้อมูลไม่สำเร็จ" , err )
        })
    },[])

    return (
        <div className="knowledge-container" style={{padding:`${GetNavHeight+20}px`, display:"flex" , flexDirection:"column" }}>
            <Nav NavHeight ={NavHeight}/>  
                {GetInfo.map((info , idx)=>(
                    <div key={idx} style={{display:"flex" , position:"relative" , paddingBottom:"50px" , gap:"25px" , justifyContent:"center"}}>
                        <div className="front-end" >
                            <p>ความรู้พื้นฐานตำแหน่ง Front End Developer <i class="fa-solid fa-computer"></i></p>    
                            {info.FrontEnd.experiences.map((info , idx)=>{
                            return(
                                    <ol key={idx}>
                                        <li>{info}</li>
                                    </ol>
                                )
                            })}           
                        </div>


                        <div className="back-end" >
                            <p>ความรู้พื้นฐานตำแหน่ง Back End Developer <i class="fa-solid fa-server"></i></p>
                            {info.BackEnd.experiences.map((info , idx)=>{
                                return(
                                    <ol>
                                        <li>{info}</li>
                                    </ol>
                                )
                            })}
                        </div>
                        
                        <div style={{ position:"absolute",bottom:0 , right:"50%" , transform:"translateX(50%)" }}>
                            <button onClick={EditForm}>แก้ไขข้อมูล</button>
                            <button style={{backgroundColor:"red"}} onClick={()=>{removeInfo(info.slug)}}>ลบข้อมูล</button>
                        </div>
                    </div>
                ))}               
                      
                    
            
        </div>
    )
}


export default Knowledge



//    return (
//         <div className="knowledge-container" style={{padding:`${GetNavHeight+20}px`}}>
//             <Nav NavHeight ={NavHeight}/>
//             <div className="front-end">
//                 <p>ความรู้พื้นฐานตำแหน่ง Front End Developer <i class="fa-solid fa-computer"></i></p>
//                 <ol>
//                     <li>HTML5 <i className="fa-brands fa-html5"></i></li>
//                     <li>CSS <i className="fa-brands fa-css3-alt"></i></li>
//                     <li>JavaScript <i className="fa-brands fa-js"></i></li>
//                     <li>React <i className="fa-brands fa-react"></i></li>
//                 </ol>
//                 <div>
//                     <button onClick={EditForm}>แก้ไขข้อมูล</button>
//                     <button style={{backgroundColor:"red"}}>ลบข้อมูล</button>
//                 </div>
//             </div>
//             <div className="back-end">
//                 <p>ความรู้พื้นฐานตำแหน่ง Back End Developer <i class="fa-solid fa-server"></i></p>
//                 <ol>
//                     <li>Node.js<i className="fa-brands fa-node"></i></li>
//                     <li>MongoDB (NoSQL Database)</li>
//                 </ol>
//                 <div>
//                     <button onClick={EditForm}>แก้ไขข้อมูล</button>
//                     <button style={{backgroundColor:"red"}}>ลบข้อมูล</button>
//                 </div>
//             </div>
//         </div>
//     )
