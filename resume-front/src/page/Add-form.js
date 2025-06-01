import Nav from "../component/Nav"
import { useState , useRef , useEffect } from "react"


const AddForm = () => {
    const NavHeight = useRef(null);

    const [GetNavHeight , SetNavHeight] = useState()


    useEffect(()=>{
        if(NavHeight){
            SetNavHeight(NavHeight.current.offsetHeight)
        }
    },[])

    return(
        <div style={{paddingTop:`${GetNavHeight}px`}}>
            <Nav NavHeight = {NavHeight}/>
            <div>
                <div>ข้อมูลส่วนตัว</div>
                <form>
                    <div>
                        <label>สัญชาติ</label>
                        <input />
                    </div>
                    <div>
                        <label>อายุ</label>
                        <input />
                    </div>
                    <div>
                        <label>น้ำหนัก</label>
                        <input />
                    </div>
                    <div>
                        <label>ส่วนสูง</label>
                        <input />
                    </div>
                    <div>
                        <label>GitHub</label>
                        <input />
                    </div>
                    <div>
                        <label>Resume File</label>
                        <input />
                    </div>
                </form>

                <div>
                    <div>ประสบการณ์การทำงาน</div>
                    <form>
                        <div>
                            <label>บริษัท</label>
                            <input />
                        </div>
                                                <div>
                            <label>ตำแหน่ง</label>
                            <input />
                        </div>
                                                <div>
                            <label>จังหวัด</label>
                            <input />
                        </div>
                                                <div>
                            <label>สถานที่</label>
                            <input />
                        </div>
                                                <div>
                            <label>ช่วงเวลาที่ทำงาน</label>
                            <input />
                        </div>
                        <div>
                            <label>รายละเอียดการทำงาน</label>
                            <ol>
                                <li><input placeholder="คลิก + เพิ่มรายการ"/></li>
                                <li><input placeholder="คลิก + เพิ่มรายการ"/></li>
                                <li><input placeholder="คลิก + เพิ่มรายการ"/></li>
                            </ol>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddForm