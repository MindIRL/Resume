
import Nav from "../component/Nav"
import "../style/contect.css"
import { useState , useRef , useEffect} from "react"
// import { Shareinfo } from "../ShareInfo"
// import { useContext } from "react"

const Contect = () => {

    // const {GetNavHeight} = useContext(Shareinfo)

    const [GetNavHeight , SetNavHeight] = useState()
    const NavHeight = useRef(null)

    useEffect(()=>{
        NavHeight.current ? SetNavHeight(NavHeight.current.offsetHeight) : console.log("ไม่มีข้อมูลความสูง Navbar")
    },[])


    return(
        <div className="container-contact" style={{paddingTop:`${GetNavHeight+5}px`}}>
            <Nav NavHeight = {NavHeight}/>
            <div className="contact" >
                <div className="contact-detail">
                    เบอร์โทร : <span>061 - 8569658</span>
                </div>
                <div className="contact-detail">
                    <div className="contact-icons">
                        social media 
                        <div><i className="fa-brands fa-facebook"></i> : <span>Good Luck Smile'z</span></div>
                        <div><i className="fa-brands fa-square-x-twitter"></i> : <span>@mymemildz</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contect