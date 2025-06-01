import "../style/introduction.css"
import { useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";


const Introduction = ({GetNavHeight}) => {

    const Navigate = useNavigate()

    const LoginPage = () =>{
            Navigate("/Login")
    }


    return(
        <div className="container" style={{paddingTop:`${GetNavHeight}px`}}>
            <div className="img">
                <img src="https://i.pinimg.com/236x/5c/bb/04/5cbb0499aa8a3149e20dc0c5b869a548.jpg" alt=""/>
            </div>
            <div className="info">
                <div>
                    <p>สวรรยา บุญประจวบ</p> 
                    <p>Sawanya Boonprajuab</p> 
                </div>
                <div className="personal-info">
                    <p>สัญชาติ : <span>ไทย</span></p> 
                    <p>อายุ : <span>29</span><i className="fa-solid fa-pen" onClick={LoginPage}></i></p>
                    <p>น้ำหนัก : <span>95 Kg.</span><i className="fa-solid fa-pen" onClick={LoginPage}></i></p> 
                    <p>ส่วนสูง : <span>169 m</span><i className="fa-solid fa-pen" onClick={LoginPage}></i></p>
                    <p>GitHub <i className="fa-brands fa-github"></i> : <span>MindIRL</span><i className="fa-solid fa-pen" onClick={LoginPage}></i></p> 
                </div>
                <div className="btn">
                    <button>Download Resume</button>
                </div>
                {/* <div className="front-end">
                    <p>ความรู้พื้นฐานตำแหน่ง Front End Developer <i class="fa-solid fa-computer"></i></p>
                    <div>
                        <i className="fa-brands fa-html5"></i>
                        <i className="fa-brands fa-css3-alt"></i>
                        <i className="fa-brands fa-js"></i>
                        <i className="fa-brands fa-react"></i>
                    </div>
                </div>
                <div className="back-end">
                    <p>ความรู้พื้นฐานตำแหน่ง Back End Developer <i class="fa-solid fa-server"></i></p>
                    <div>
                        <i className="fa-brands fa-node"></i>
                        <span>MongoDB (NoSQL Database)</span>
                    </div>
                </div> */}
            </div>

            {/* {Edit && (
                <div className="popup">
                    <div className="popup-content">
                        <p>กรุณาเข้าสู่ระบบเพื่อแก้ไข</p>
                        <button onClick={CloseEditClick}>ปิด</button>
                    </div>
                </div>
            )} */}
        </div>
    )
}


export default Introduction
