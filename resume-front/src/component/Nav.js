
import {Link, useNavigate} from "react-router-dom"
import  "../style/nav.css"
import { useState , useRef , useLayoutEffect} from "react"
import { getUsername , logout } from "../services/authorize"



const Nav = ({NavHeight}) => {

    const button_nav_toggle_height = useRef(null);
    const [GetbuttonNavHeight , SetbuttonNavHeight] = useState(0);

    const Navigate = useNavigate()

    const [newclass , setnewclass] = useState(false)

    const addclass =()=> setnewclass(!newclass)

    console.log(newclass)


    useLayoutEffect(()=>{
          if(button_nav_toggle_height.current){
            SetbuttonNavHeight(button_nav_toggle_height.current.offsetHeight)
          }else {
            console.log("ไม่มีข้อมูลความสูง Navbar")
          }
      },[])

    useLayoutEffect(()=>{
      console.log(GetbuttonNavHeight)
    },[GetbuttonNavHeight])

    return(
        <div className="nav" ref={NavHeight}>
            <div className= {newclass ? "container-toggle active" : "container-toggle"}  style={{paddingTop:`${GetbuttonNavHeight}px`}}>
                <div className="nav-toggle">
                    <div><Link to={"/"}><i className="fa-solid fa-house"></i> <span>หน้าแรก</span></Link></div>
                    <div><Link to={"/Education"}><i className="fa-solid fa-school"></i> <span>การศึกษา</span></Link></div>
                    <div><Link to={"/Job"}><i className="fa-solid fa-award"></i> <span>การทำงาน</span></Link></div>
                    <div><Link to={"/Contect"}><i className="fa-solid fa-phone-volume"></i> <span>ติดต่อ</span></Link></div>
                    <div><Link to={"/Knowledge"} className="important"><span>ความรู้พื้นฐาน Front & Back End Developer</span></Link></div>
                </div>
            </div>
            <button className="nav-toggle" onClick={addclass} style={{backgroundColor: newclass ? "yellow" : "orange" }} ref={button_nav_toggle_height}>
                <i className="fa-solid fa-bars" style={{color: newclass ? "black" : "white"}}></i>
            </button>
            <div className="nav-link">
                <div><Link to={"/"}><i className="fa-solid fa-house"></i> <span>หน้าแรก</span></Link></div>
                <div><Link to={"/Education"}><i className="fa-solid fa-school"></i> <span>การศึกษา</span></Link></div>
                <div><Link to={"/Job"}><i className="fa-solid fa-award"></i> <span>การทำงาน</span></Link></div>
                <div><Link to={"/Contect"}><i className="fa-solid fa-phone-volume"></i> <span>ติดต่อ</span></Link></div>
                <div><Link to={"/Knowledge"} className="important"><span>ความรู้พื้นฐาน Front & Back End Developer</span></Link></div>
            </div>
            

            <div className="nav-login">
                {getUsername() && (
                <div className="form-selection"><i className="fa-solid fa-file" style={{marginRight:"2px"}}></i> ฟอร์ม <i className="fa-solid fa-caret-down" style={{marginLeft:"4px" , color:"#c41411"}}></i>
                    <div className="form-option">
                        <Link to = {"/Add-form"}><div><i className="fa-regular fa-pen-to-square" style={{marginRight:"2px"}}></i> บันทึกข้อมูล</div></Link>
                        {/* <Link to = {"/Edit-form/123"}><div><i class="fa-solid fa-wrench" style={{marginRight:"2px"}}></i> แก้ไขข้อมูล</div></Link> */}
                    </div>
                </div>
                )}
                {!getUsername() && (<div><Link to= {"/Login"}><i className="fa-solid fa-user-pen"></i> <span>เข้าสู่ระบบ</span></Link></div>)}
                {getUsername() && (<div><a onClick={()=>{logout(next=>Navigate("/"))}}><i className="fa-solid fa-user-pen"></i> <span>ออกจากระบบ</span></a></div>)}
            </div>
        </div>

    )
}

export default Nav