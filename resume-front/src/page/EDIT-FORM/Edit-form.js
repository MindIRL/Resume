import Nav from "../../component/Nav"
import "../../style/edit-form.css"
import { useState , useRef , useEffect } from "react"
import EditPersonalForm from "./Edit-PersonalForm"
import EditWorkForm from "./Edit-WorkForm"
import EditKnowledgeForm from "./Edit-KnowledgeForm"

const EditForm = () => {
    const NavHeight = useRef(null);
    const [GetNavHeight , SetNavHeight] = useState()

    useEffect(()=>{
        if(NavHeight){
            SetNavHeight(NavHeight.current.offsetHeight)
        }
    },[])

    return(
        <div style={{paddingTop:`${GetNavHeight+30}px`}}>
            <Nav NavHeight = {NavHeight}/>
            <div className="form-container">
                {/* สร้างเงื่อนไขเพื่อเปิดไฟล์แต่ละหน้า*/}
                <EditPersonalForm />
                <EditWorkForm />
                <EditKnowledgeForm />
            </div>
        </div>
    )
}


export default EditForm