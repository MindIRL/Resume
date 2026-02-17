import {Navigate, Outlet , useLocation, useNavigate} from "react-router-dom"
import {getUsername} from "./services/authorize"


const AdminRoute = () =>{
    const location = useLocation()
    return(
        getUsername() ? <Outlet /> : <Navigate to="/Login" state={{from:location}} replace/>
    )
}

export default AdminRoute