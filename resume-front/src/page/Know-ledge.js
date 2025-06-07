import Nav from "../component/Nav"
import "../style/know-ledge.css"
import { useEffect , useState , useRef } from "react"


const Knowledge = () => {
    const NavHeight = useRef(null)

    const [GetNavHeight , SetNavHeight] = useState(null)

    useEffect(()=>{
        if(NavHeight.current){
            SetNavHeight(NavHeight.current.offsetHeight)
        }
    },[])

    return (
        <div className="knowledge-container" style={{padding:`${GetNavHeight+20}px`}}>
            <Nav NavHeight ={NavHeight}/>
            <div className="front-end">
                <p>ความรู้พื้นฐานตำแหน่ง Front End Developer <i class="fa-solid fa-computer"></i></p>
                <ol>
                    <li>HTML5 <i className="fa-brands fa-html5"></i></li>
                    <li>CSS <i className="fa-brands fa-css3-alt"></i></li>
                    <li>JavaScript <i className="fa-brands fa-js"></i></li>
                    <li>React <i className="fa-brands fa-react"></i></li>
                </ol>
            </div>
            <div className="back-end">
                <p>ความรู้พื้นฐานตำแหน่ง Back End Developer <i class="fa-solid fa-server"></i></p>
                <ol>
                    <li>Node.js<i className="fa-brands fa-node"></i></li>
                    <li>MongoDB (NoSQL Database)</li>
                </ol>
            </div>

        </div>
    )
}


export default Knowledge

