
import Nav from "../component/Nav"
import "../style/job.css"
import { useRef , useEffect , useState } from "react"


const Job = () => {
    const NavHeight = useRef(null)
    const [GetNavHeight , SetNavHeight] = useState()


    useEffect(()=>{
        if(NavHeight){
            SetNavHeight(NavHeight.current.offsetHeight)
        }
    },[])

    return(
        <div className="Education-container" style={{paddingTop:`${GetNavHeight}px`}}>
            <Nav NavHeight = {NavHeight}/>
            <div className="Education-titel">
                <span>ประสบการณ์การทำงาน</span>
            </div>
            <div className="Education-detail">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1vObf-YiT9-XcqfXIX25Hw7O_frb_MnjxfQ&s"></img>
                <div>
                    <div>
                        <strong>บริษัท : </strong>
                        <span>BAGS Ground Services Company Limited</span>
                    </div>
                    <div>
                        <strong>ตำแหน่ง : </strong>
                        <span>Passenger Service Agent</span>
                    </div>
                    <div>
                        <strong>จังหวัด : </strong>
                        <span>ภูเก็ต</span>
                    </div>
                    <div>
                        <strong>สถานที่ : </strong>
                        <span>ท่าอากาศยานนานาชาติภูเก็ต</span>
                    </div>
                    <div>
                        <strong>ช่วงเวลาที่ทำงาน : </strong>
                        <span>2 เมษายน 2561 - 31 กรกฎาคม 2561</span>
                    </div>
                    <div>
                        <strong>รายละเอียดการทำงาน : </strong>
                        <ul>
                            <li>เช็คอิน โหลดกระเป๋า และออกบอร์ดดิ้งพาสให้ผู้โดยสาร</li>
                            <li>เตรียมเอกสาร ก่อน - หลัง เที่ยวบิน</li>
                            <li>ประสานงานกับลูกเรือเกี่ยวกับเอกสารของเที่ยวบินและผู้โดยสารพิเศษในเที่ยวบินนั้นๆ ให้ลูกเรือทราบ</li>
                            <li>รับ - ส่ง ผู้โดยสารที่ประตูเครื่องบิน</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="Education-detail">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHWcQzh44qhFluFuZ-oeF3qrD6sxeGeKP9xw&s"></img>
                <div>
                    <div>
                        <strong>บริษัท : </strong>
                        <span>บริษัท รัตนากร แอสเซท จำกัด</span>
                    </div>
                    <div>
                        <strong>ตำแหน่ง : </strong>
                        <span>บัญชีตลาด</span>
                    </div>
                    <div>
                        <strong>จังหวัด : </strong>
                        <span>ชลบุรี</span>
                    </div>
                    <div>
                        <strong>สถานที่ : </strong>
                        <span>ออฟฟิศ เลขที่ 300/8 หมู่ 10 ซอย - ถนน - ตำบล หนองปรือ อำเภอ บางละมุง จังหวัด ชลบุรี 20150</span>
                    </div>
                    <div>
                        <strong>ช่วงเวลาที่ทำงาน : </strong>
                        <span>8 ตุลาคม 2561 - 31 ตุลาคม 2562</span>
                    </div>
                    <div>
                        <strong>รายละเอียดการทำงาน : </strong>
                        <ul>
                            <li>คำนวณค่าเช่าแผงตลาด ค่าน้ำ ค่าไฟ ค่าขยะ และค่าใช้จ่ายในแต่ละเดือน - ปี ที่ต้องเรียกเก็บ</li>
                            <li>ออกใบเรียกเก็บให้ผู้เช่าแผงตลาดทุกเดือน</li>
                            <li>ตามเงินผู้เช่าที่จ่ายเงินไม่ตรงกำหนดและเรียกเก็บค่าจ่ายเงินล่าช้า</li>
                            <li>ทำรายงานรายรับและยอดค้างของผู้เช่าส่งให้หัวหน้าทุกวัน</li>
                            <li>ทำเอกสารชี้แจงรายละเอียดเกี่ยวกับปัญหาผู้เช่าให้หัวหน้าทราบ</li>
                            <li>ออกตรวจเช็คสต๊อกโรงแรมในเครือบริษัทว่าแต่ละห้องมีของบริการลูกค้าครบถ้วนตามมาตรฐานหรือไม่</li>
                            <li>ทำเอกสารค่าคอมมิชชั่นประจำเดือน</li>
                            <li>ทำงานส่วนอื่น ๆ ที่หัวหน้ามอบหมาย</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="Education-detail">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6sVSXh61ssUUKx2G-ks6gwt_XGaI6UJWbnA&s"></img>
                <div>
                    <div>
                        <strong>บริษัท : </strong>
                        <span>บริษัท บ้านอำเภอเทรดดิ้ง จำกัด</span>
                    </div>
                    <div>
                        <strong>ตำแหน่ง : </strong>
                        <span>ศูนย์จ่ายคอนกรีต</span>
                    </div>
                    <div>
                        <strong>จังหวัด : </strong>
                        <span>ชลบุรี</span>
                    </div>
                    <div>
                        <strong>สถานที่ : </strong>
                        <span>ออฟฟิศ เลขที่ 31 หมู่2 ต.นาจอมเทียน อ.สัตหีบ จ.ชลบุรี 20250</span>
                    </div>
                    <div>
                        <strong>ช่วงเวลาที่ทำงาน : </strong>
                        <span></span>
                    </div>
                    <div>
                        <strong>รายละเอียดการทำงาน : </strong>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Job