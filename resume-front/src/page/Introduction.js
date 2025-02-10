import introductiont from "../style/introduction.css"

const Introduction = () => {
    return(
        <div className="container">
            <img src="https://i.pinimg.com/236x/5c/bb/04/5cbb0499aa8a3149e20dc0c5b869a548.jpg" alt=""/>
            <div>
                <div>
                    <p>ชื่อ : <span>สวรรยา</span> นามสกุล : <span>บุญประจวบ</span></p> 
                </div>
                <div>
                    <p>สัญชาติ : <span>ไทย</span></p> 
                </div>
                <div>
                    <p>อายุ : <span>29</span></p> 
                </div>
                <div>
                    <p>น้ำหนัก : <span>95 Kg.</span></p> 
                </div>
                <div>
                    <p>ความรู้พื้นฐานตำแหน่ง Front End Developer</p>
                    <div>
                        <p>HTML (Hyper Text Markup Language)</p>
                        <p>CSS (Cascading Style Sheets)</p>
                        <p>JavaScript</p>
                        <p>React (Frameworks)</p>
                    </div>
                </div>
                <div>
                    <p>ความรู้พื้นฐานตำแหน่ง Back End Developer</p>
                    <div>
                        <p>Node.js (Frameworks)</p>
                        <p>MongoDB (NoSQL Database)</p>
                    </div>
                </div>
                <div>
                    <p>ความรู้พื้นฐานอื่น ๆ </p>
                    <div>
                        <p>GitHub</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Introduction
