import { BrowserRouter , Routes , Route} from "react-router-dom"
import App from "./page/App"
import Education from "./page/Education"
import Job from "./page/Job"
import Contect from "./page/Contect"
import AdminRoute from "./AdminRoute"
import Login from "./page/Login"
import AddForm from "./page/ADD-form/Add-form"
import EditForm from "./page/EDIT-FORM/Edit-form"
import Knowledge from "./page/Know-ledge"


function MyRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/Education" element={<Education />} />
                <Route path="/Job" element={<Job />}></Route>
                <Route path="/Contect" element={<Contect />} />
                <Route path="/Knowledge" element={<Knowledge />} />
                {/* ต้องมี Token ถึงจะเข้าหน้านี้ได้ */}
                <Route element={<AdminRoute />}>
                    <Route path="/Add-form" element={<AddForm />} />
                    <Route path="/Edit-form/:slug" element={<EditForm />} />                    
                </Route>
                <Route path="/Login" element={<Login />}></Route>               
            </Routes>
        </BrowserRouter>

    )
}

export default MyRoute