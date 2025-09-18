
import {Link} from "react-router-dom"
import  "../style/nav.css"
import { useState } from "react"

const Nav = ({NavHeight}) => {

    const [newclass , setnewclass] = useState(false)

    const addclass =()=> setnewclass(!newclass)

    console.log(newclass)


    return(
        <div className="nav" ref={NavHeight}>
            <button className="nav-toggle" onClick={addclass}>
                <i className="fa fa-bars"></i>
            </button>
            <div className="nav-link">
                <div><Link to={"/"}><i className="fa-solid fa-house"></i> <span>หน้าแรก</span></Link></div>
                <div><Link to={"/Education"}><i className="fa-solid fa-school"></i> <span>การศึกษา</span></Link></div>
                <div><Link to={"/Job"}><i className="fa-solid fa-award"></i> <span>การทำงาน</span></Link></div>
                <div><Link to={"/Contect"}><i className="fa-solid fa-phone-volume"></i> <span>ติดต่อ</span></Link></div>
                <div><Link to={"/Knowledge"} className="important"><span>ความรู้พื้นฐาน Front & Back End Developer</span></Link></div>
            </div>

            <div className="nav-login">
                <div className="form-selection"><i class="fa-solid fa-file" style={{marginRight:"2px"}}></i> ฟอร์ม <i class="fa-solid fa-caret-down" style={{marginLeft:"4px" , color:"#c41411"}}></i>
                    <div className="form-option">
                        <Link to = {"/Add-form"}><div><i class="fa-regular fa-pen-to-square" style={{marginRight:"2px"}}></i> บันทึกข้อมูล</div></Link>
                        <Link to = {"/Edit-form/123"}><div><i class="fa-solid fa-wrench" style={{marginRight:"2px"}}></i> แก้ไขข้อมูล</div></Link>
                    </div>
                </div>
                <div><Link to= {"/Login"}><i className="fa-solid fa-user-pen"></i> <span>เข้าสู่ระบบ</span></Link></div>
            </div>
        </div>

    )
}

export default Nav