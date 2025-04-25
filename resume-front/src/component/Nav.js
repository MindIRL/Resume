
import {Link} from "react-router-dom"
import  "../style/nav.css"

const Nav = ({NavHeight}) => {
    return(
        <div className="nav" ref={NavHeight}>
            <div className="nav-link">
                <div><Link to={"/"}><i class="fa-solid fa-house"></i> <span>หน้าแรก</span></Link></div>
                <div><Link to={"/Education"}><i class="fa-solid fa-school"></i> <span>การศึกษา</span></Link></div>
                <div><Link to={"/Job"}><i class="fa-solid fa-award"></i> <span>การทำงาน</span></Link></div>
                <div><Link to={"/Contect"}><i class="fa-solid fa-phone-volume"></i> <span>ติดต่อ</span></Link></div>
            </div>

            <div className="nav-login">
                <div><Link to= {"/Login"}><i class="fa-solid fa-user-pen"></i> <span>เข้าสู่ระบบ</span></Link></div>
            </div>
        </div>

    )
}

export default Nav