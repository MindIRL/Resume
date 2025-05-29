
import { useRef , useState , useEffect} from "react";
import Nav from "../component/Nav"
import "../style/education.css"

const Education = () => {

    const NavHeight = useRef(null);
    const [GetNavHeight , SetNavHeight] = useState()

    useEffect(()=>{
        if(NavHeight){
            SetNavHeight(NavHeight.current.offsetHeight)
        }
    },[])

    return(
        <div className="container-education" style={{paddingTop:`${GetNavHeight}px`}}>
            <Nav NavHeight = {NavHeight}/>
            <div className="container-sub-education1">
                <span>มหาวิทยาลัยเกษมบัณฑิต <span className="font-Caveat">(Kasem Bundit University)</span></span>
            </div>
            <div className="img-education">
                <img src="https://campus.campus-star.com/app/uploads/2017/06/building_07.jpg"></img>
            </div>
            <div className="container-sub-education2">
                <div>
                    <div>
                        <strong>สาขา : </strong>
                        <span>ธุรกิจการบิน (Airlines Business)</span>
                    </div>
                    <div>
                        <strong>วิชาเอก : </strong>
                        <span>การสำรองที่นั่งและการออกตั๋ว (Reservations and Ticketing)</span>
                    </div>
                    <div>
                        <strong>วิชาโท : </strong>
                        <span>ภาษาจีนเพื่อการสื่อสารในธุรการบิน (Chinese for communicate in airline business)</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education