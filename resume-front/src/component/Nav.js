
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
            </div>

            <div className="nav-login">
                <div><Link to= {"/Login"}><i className="fa-solid fa-user-pen"></i> <span>เข้าสู่ระบบ</span></Link></div>
            </div>
        </div>

    )
}

export default Nav