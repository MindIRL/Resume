import Nav from "../../component/Nav"
import "../../style/add-form.css"
import { useState , useRef , useEffect } from "react"
import PersonalForm from "./PersonalForm"
import WorkForm from "./WorkForm"
import KnowledgeForm from "./KnowledgeForm"


const AddForm = () => {
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
                <PersonalForm />
                <WorkForm />
                <KnowledgeForm />
            </div>
        </div>
    )
}

export default AddForm