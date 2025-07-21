import Nav from "../component/Nav"
import "../style/know-ledge.css"
import { useEffect , useState , useRef } from "react"
import { useNavigate } from "react-router-dom"
import axios  from "axios"


const Knowledge = () => {
    const NavHeight = useRef(null)

    const [GetNavHeight , SetNavHeight] = useState(null)

    const Naigate = useNavigate()

    useEffect(()=>{
        if(NavHeight.current){
            SetNavHeight(NavHeight.current.offsetHeight)
        }
    },[])

    const EditForm = () =>{
        Naigate("/Edit-form")
    }

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API_URL}Knowledgeinformations`)
        .then((info)=>{
            console.log("ดึงข้อมูลสำเร็จ" , info)
        })
        .catch((err)=>{
            console.log("ดึงข้อมูลไม่สำเร็จ" , err )
        })
    },[])

    return (
        <div className="knowledge-container" style={{padding:`${GetNavHeight+20}px`}}>
            <Nav NavHeight ={NavHeight}/>
            <div className="front-end">
                <p>ความรู้พื้นฐานตำแหน่ง Front End Developer <i class="fa-solid fa-computer"></i></p>
                <ol>
                    <li>HTML5 <i className="fa-brands fa-html5"></i></li>
                    <li>CSS <i className="fa-brands fa-css3-alt"></i></li>
                    <li>JavaScript <i className="fa-brands fa-js"></i></li>
                    <li>React <i className="fa-brands fa-react"></i></li>
                </ol>
                <div>
                    <button onClick={EditForm}>แก้ไขข้อมูล</button>
                    <button style={{backgroundColor:"red"}}>ลบข้อมูล</button>
                </div>
            </div>
            <div className="back-end">
                <p>ความรู้พื้นฐานตำแหน่ง Back End Developer <i class="fa-solid fa-server"></i></p>
                <ol>
                    <li>Node.js<i className="fa-brands fa-node"></i></li>
                    <li>MongoDB (NoSQL Database)</li>
                </ol>
                <div>
                    <button onClick={EditForm}>แก้ไขข้อมูล</button>
                    <button style={{backgroundColor:"red"}}>ลบข้อมูล</button>
                </div>
            </div>
        </div>
    )
}


export default Knowledge

