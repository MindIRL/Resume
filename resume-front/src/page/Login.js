import Nav from "../component/Nav"
import "../style/login.css"
import { useRef , useEffect , useState  } from "react"
import "@fortawesome/fontawesome-free/css/all.min.css";
import axios from "axios"
import {  useNavigate } from "react-router-dom";
import {authenticate} from "../services/authorize"
import Swal from "sweetalert2";
import { useLocation } from "react-router-dom";

const Login = () =>{
    const NavHeight = useRef(null);
    const [GetNavHeight , SetNavHeight] = useState();
    const [loginPassword , SetloginPassword] = useState({
        username : "" ,
        password :""
    })

    const location = useLocation()
    const fromStateLocation = location?.state?.from?.pathname || "/"

    const [Icon , SetIcon] = useState(false)
    const [Type , SetType] = useState(false)

    const Navigate = useNavigate()

    const {username , password} = loginPassword
    

    const inputValue = (e) =>{
        const {name , value} = e.target
        SetloginPassword({...loginPassword ,
            [name] : value
        })

        console.log(name, value)
    }

    const ResetIcon = () => {
        SetIcon((prev) => (!prev))
        SetType((prev) => (!prev))   
    }


    const submitForm = (e) => {
        e.preventDefault()
        console.table(loginPassword)

        axios.post(`${process.env.REACT_APP_API_URL}login` , {username , password})
        .then((res)=>{
            console.log(res)
            authenticate(res , next => Navigate(fromStateLocation , {replace:true}))
        })
        .catch((err)=>{
            Swal.fire(
                'การเข้าถึงผิดพลาด' ,
                err.response.data.error ,
                'error'
            )

            console.log(err)
        })

    }

    useEffect(()=>{
        if(NavHeight){
            SetNavHeight(NavHeight.current.offsetHeight)
        }
        console.log(location)
    },[])


    return(
        <div className="container-form" style={{paddingTop:`${GetNavHeight}px`, height:"100vh"}}>
            <Nav NavHeight = {NavHeight}/>
            <form className="form-login" onSubmit={submitForm}>
                <div>
                    <label>Username</label>
                    <input type="text" name="username" value={username} onChange={inputValue}/>
                </div>
                <div className="password">
                    <label>Password</label>
                    <input type={Type ? "text":"password"} name="password" value={password} onChange={inputValue} />
                    <i className = {Icon ? "fa-regular fa-eye" : "fa-regular fa-eye-slash"} onClick={ResetIcon}></i>
                    {/* <i class="fa-regular fa-eye-slash" onClick={ResetIcon}></i> */}
                    {/* <i class="fa-regular fa-eye"></i> */}
                </div>
                <div className="submitbotton">
                    <input  type="submit"  className="botton" value={"เข้าสู่ระบบ"}></input>
                </div>
            </form>
        </div>
    )
}



export default Login