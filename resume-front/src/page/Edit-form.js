import Nav from "../component/Nav"
import "../style/edit-form.css"
import { useState , useRef , useEffect } from "react"

const EditForm = () => {
    const NavHeight = useRef(null);

    const [GetNavHeight , SetNavHeight] = useState()


    useEffect(()=>{
        if(NavHeight){
            SetNavHeight(NavHeight.current.offsetHeight)
        }
    },[])


    return (
        <div style={{paddingTop:`${GetNavHeight+30}px`}}>
            <Nav NavHeight = {NavHeight}/>
            <div className="edit-form-container">
                <div className="box-edit-form">
                    <div className="title-edit-form">ข้อมูลส่วนตัว</div>
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
                            <input type="file"/>
                        </div>
                        <input type="submit" value="บันทุกข้อมูล"/>
                    </form>
                </div>



                <div className="box-edit-form">
                    <div className="title-form">ประสบการณ์การทำงาน</div>
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
                            <input placeholder="URL ใส่ช่องนี้"/>
                            <div>
                                <input type="file" name="Image"/>
                            </div>
                        </div>
                        <div>
                            <label>รายละเอียดการทำงาน</label>
                            <ol>
                                <li><input placeholder="คลิก + เพิ่มรายการ"/></li>
                                <li><input placeholder="คลิก + เพิ่มรายการ , - ลบรายการ"/></li>
                                <li><input placeholder="คลิก + เพิ่มรายการ , - ลบรายการ"/></li>
                                <span><i class="fa-solid fa-square-plus"></i><i class="fa-solid fa-minus"></i></span>
                            </ol>
                        </div>
                        <input type="submit" value="บันทุกข้อมูล"/>
                    </form>
                </div>


                <div className="box-edit-form">
                    <div style={{width:"140%"}} className="title-form">ความรู้พื้นฐาน Front & Back End</div>
                    <form>
                        <div>
                            <label>Front End Developer</label>
                            <ol>
                                <li><input placeholder="คลิก + เพิ่มรายการ"/></li>
                                <li><input placeholder="คลิก + เพิ่มรายการ , - ลบรายการ"/></li>
                                <li><input placeholder="คลิก + เพิ่มรายการ , - ลบรายการ"/></li>
                                <span><i class="fa-solid fa-square-plus"></i><i class="fa-solid fa-minus"></i></span>
                            </ol>
                        </div>
                        <div>
                            <label>Back End Developer</label>
                            <ol>
                                <li><input placeholder="คลิก + เพิ่มรายการ"/></li>
                                <li><input placeholder="คลิก + เพิ่มรายการ , - ลบรายการ"/></li>
                                <li><input placeholder="คลิก + เพิ่มรายการ , - ลบรายการ"/></li>
                                <span><i class="fa-solid fa-square-plus"></i><i class="fa-solid fa-minus"></i></span>
                            </ol>
                        </div>
                        <input type="submit" value="บันทุกข้อมูล"/>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default EditForm