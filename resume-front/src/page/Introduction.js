import "../style/introduction.css"
import { useState } from "react";


const Introduction = ({GetNavHeight}) => {

    const [Edit , SetEdit] = useState(false)

    const ShowEditClick = () => {
        SetEdit(true)
    }

    const CloseEditClick = () => {
        SetEdit(false)
    }

    return(
        <div className="container" style={{paddingTop:`${GetNavHeight+10}px`}}>
            <div className="img">
                <img src="https://i.pinimg.com/236x/5c/bb/04/5cbb0499aa8a3149e20dc0c5b869a548.jpg" alt=""/>
            </div>
            <div>
                <div>
                    <p>ชื่อ : <span>สวรรยา</span> นามสกุล : <span>บุญประจวบ</span></p> 
                </div>
                <div>
                    <p>สัญชาติ : <span>ไทย</span></p> 
                </div>
                <div>
                    <p>อายุ : <span>29</span><i class="fa-solid fa-pen" onClick={ShowEditClick}></i></p> 
                </div>
                <div>
                    <p>น้ำหนัก : <span>95 Kg.</span></p> 
                </div>
                <div>
                    <p>GitHub <i class="fa-brands fa-github"></i> : <span>MindIRL</span></p> 
                </div>
                <div>
                    <p>ความรู้พื้นฐานตำแหน่ง Front End Developer <i class="fa-solid fa-computer"></i></p>
                    <div>
                        <p><i class="fa-brands fa-html5"></i> HTML (Hyper Text Markup Language)</p>
                        <p><i class="fa-brands fa-css3-alt"></i> CSS (Cascading Style Sheets)</p>
                        <p><i class="fa-brands fa-js"></i> JavaScript</p>
                        <p><i class="fa-brands fa-react"></i> React (Frameworks)</p>
                    </div>
                </div>
                <div>
                    <p>ความรู้พื้นฐานตำแหน่ง Back End Developer <i class="fa-solid fa-server"></i></p>
                    <div>
                        <p><i class="fa-brands fa-node"></i> Node.js (Frameworks)</p>
                        <p>MongoDB (NoSQL Database)</p>
                    </div>
                </div>
            </div>

            {Edit && (
                <div className="popup">
                    <div className="popup-content">
                        <p>กรุณาล็อคอินเพื่อแก้ไข</p>
                        <button onClick={CloseEditClick}>ปิด</button>
                    </div>
                </div>
            )}
        </div>
    )
}


export default Introduction
