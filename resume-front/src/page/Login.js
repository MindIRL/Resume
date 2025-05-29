import Nav from "../component/Nav"
import "../style/login.css"
import { useRef , useEffect , useState } from "react"
import "@fortawesome/fontawesome-free/css/all.min.css";

const Login = () =>{
    const NavHeight = useRef(null);
    const [GetNavHeight , SetNavHeight] = useState();

    useEffect(()=>{
        if(NavHeight){
            SetNavHeight(NavHeight.current.offsetHeight)
        }
    },[])
    return(
        <div className="container-form" style={{paddingTop:`${GetNavHeight}px`, height:"100vh"}}>
            <Nav NavHeight = {NavHeight}/>
            <form className="form-login">
                <div>
                    <label>Username</label>
                    <input type="text"/>
                </div>
                <div className="password">
                    <label>Password</label>
                    <input type="password" />
                    <i class="fa-regular fa-eye-slash"></i>
                    {/* <i class="fa-regular fa-eye"></i> */}
                </div>
            </form>
        </div>
    )
}



export default Login