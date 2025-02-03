

import nav from "../style/nav.css"

const Nav = () => {
    return(
        <div className="nav">
            <div className="nav-link">
                <div><a href="/">หน้าแรก</a></div>
                <div><a>การศึกษา</a></div>
                <div><a>การทำงาน</a></div>
                <div><a>ติดต่อ</a></div>
            </div>

            <div className="nav-login">
                <div><a>เข้าสู่ระบบ</a></div>
            </div>
    </div>

    )
}

export default Nav