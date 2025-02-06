
import {Link} from "react-router-dom"
import  "../style/nav.css"

const Nav = () => {
    return(
        <div className="nav">
            <div className="nav-link">
                <div><Link to={"/"}>หน้าแรก</Link></div>
                <div><Link to={"/Education"}>การศึกษา</Link></div>
                <div><Link to={"/Job"}>การทำงาน</Link></div>
                <div><Link to={"/Contect"}>ติดต่อ</Link></div>
            </div>

            <div className="nav-login">
                <div><Link to= {"/Login"}>เข้าสู่ระบบ</Link></div>
            </div>
    </div>

    )
}

export default Nav