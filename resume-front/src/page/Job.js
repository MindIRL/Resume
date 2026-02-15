
import Nav from "../component/Nav"
import "../style/job.css"
import { useRef , useEffect , useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import Swal from "sweetalert2"
import { getToken } from "../services/authorize"


const Job = () => {
    const NavHeight = useRef(null)
    const [GetNavHeight , SetNavHeight] = useState()
    const Navigate = useNavigate()
    const [GetInfo , SetInfo] = useState([])
    const [ImageURLs , SetImageURLs] = useState({})


    useEffect(()=>{
        if(NavHeight){
            SetNavHeight(NavHeight.current.offsetHeight)
        }
    },[])

    const EditForm = (slug) =>{
        if(slug){
            console.log("ดูรหัสslug" , slug)
        }
        Navigate(`/Edit-form/${slug}`)
    }

    const refreshData = () =>{
        axios.get(`${process.env.REACT_APP_API_URL}Workinformations`)
        .then((res)=>{
            console.log("ดึงข้อมูลสำเร็จ")
            const NewWorkDetails_parse = res.data.map((item)=>({
                ...item , WorkDetails : typeof item.WorkDetails === "string" ? JSON.parse(item.WorkDetails) : item.WorkDetails               
            }))
            SetInfo(NewWorkDetails_parse)
        })
        .catch((err)=>{
            console.log("ดึงข้อมูลไม่สำเร็จสำเร็จ" , err)
        })
    }

    const removeInfo = (slug) =>{
        if(slug){       
            Swal.fire({
                title: "คุณต้องการลบข้อมูลใช้ใหม?",
                // text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#30d63eff",
                cancelButtonColor: "#d33",
                cancelButtonText:"ยกเลิก" ,
                confirmButtonText: "ตกลง" 
            }).then((result) => {
                if (result.isConfirmed) {
                axios.delete(`${process.env.REACT_APP_API_URL}delete-work-one-information/${slug} ` , {headers:{Authorization:`bearer ${getToken()}`}})
                .then((res)=>{
                    console.log("ลบข้อมูลสำเร็จ" , res)
                    Swal.fire({
                    title: "ลบข้อมูล!",
                    text: "ลบข้อมูลเรียบร้อย",
                    icon: "success"
                    });
                    refreshData()
                }) 
                .catch((err)=>{
                    console.log("ลบข้อมูลไม่สำเร็จ" , err)
                    Swal.fire({
                    title: "ลบข้อมูลไม่สำเร็จ!",
                    text: "กรุณาลองใหม่อีกครั้ง",
                    icon: "warning"
                    });
                })
        }
    })
    }
        // if(slug){
        //     axios.delete(`${process.env.REACT_APP_API_URL}delete-work-one-information/${slug}`)
        //     .then((res)=>{
        //         console.log("ลบข้อมูลสำเร็จ" , res)
        //     })
        //     .catch((err)=>{
        //         console.log("ลบข้อมูลไม่สำเร็จ" , err)
        //     })
        // }     
    }

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API_URL}Workinformations`)
        .then((info)=>{
            console.log("ดึงข้อมูลสำเร็จ" , info)
            const WorkDetails_Parse = info.data.map((item)=>({
            ...item , WorkDetails : typeof item.WorkDetails === "string" ? JSON.parse(item.WorkDetails) : item.WorkDetails
            }))
            console.log(WorkDetails_Parse)
            SetInfo(WorkDetails_Parse)
        })
        .catch((err)=>{
            console.log("ดึงข้อมูลไม่สำเร็จ" , err)
        })
    },[])

    useEffect(()=>{
        if(GetInfo){
            console.log( "รีเช็คข้อมูล" ,GetInfo , GetInfo.length)
        }

        if(GetInfo.length > 0){
            const urls = {}
            console.log(urls)

            GetInfo.map((info)=>{
                if(info.ImageFile && info.ImageFile.data && info.ImageFile.data.data){
                    const byteArray = new Uint8Array(info.ImageFile.data.data)
                    const blob = new Blob([byteArray] , {type : info.ImageFile.contentType})
                    const imageURL = URL.createObjectURL(blob)
                    urls[info.slug] = imageURL
                }else if(info.ImageURL){
                    urls[info.slug] = info.ImageURL
                }
            })

            SetImageURLs(urls)

        }
        
    },[GetInfo])

    return(
        <div className="Education-container" style={{paddingTop:`${GetNavHeight}px`}}>
            <Nav NavHeight = {NavHeight}/>
            {GetInfo.map((info , idx)=>{
                return (
                    <div key={idx}>
                         <div className="Education-titel">
                            <span>ประสบการณ์การทำงาน</span>
                        </div>
                        <div className="Education-detail">
                            <img alt="" src={ImageURLs[info.slug]}></img>
                            <div>
                                <div>
                                    <strong>บริษัท : </strong>
                                    <span>{info.company}</span>
                                </div>
                                <div>
                                    <strong>ตำแหน่ง : </strong>
                                    <span>{info.position}</span>
                                </div>
                                <div>
                                    <strong>จังหวัด : </strong>
                                    <span>{info.province}</span>
                                </div>
                                <div>
                                    <strong>สถานที่ : </strong>
                                    <span>{info.location}</span>
                                </div>
                                <div>
                                    <strong>ช่วงเวลาที่ทำงาน : </strong>
                                    <span>{info.WorkingTime}</span>
                                </div>
                                <div>
                                    <strong>รายละเอียดการทำงาน : </strong>
                                    {info.WorkDetails.experiences.map((WorkInfo)=>(
                                        <ul>
                                            <li>{WorkInfo}</li>
                                        </ul>
                                    
                                    ))}
                                </div>

                                <div>
                                    <button onClick={()=>EditForm(info.slug)}>แก้ไขข้อมูล</button>
                                    <button onClick={()=>removeInfo(info.slug)} style={{backgroundColor:"red"}}>ลบข้อมูล</button>
                                </div>
                            </div>
                        </div>
                    </div> 
                )
            })}
        </div>
    )
}

export default Job




    // return(
    //     <div className="Education-container" style={{paddingTop:`${GetNavHeight}px`}}>
    //         <Nav NavHeight = {NavHeight}/>
    //         <div className="Education-titel">
    //             <span>ประสบการณ์การทำงาน</span>
    //         </div>
    //         <div className="Education-detail">
    //             <img alt="BAGS Ground Services Company Limited" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1vObf-YiT9-XcqfXIX25Hw7O_frb_MnjxfQ&s"></img>
    //             <div>
    //                 <div>
    //                     <strong>บริษัท : </strong>
    //                     <span>BAGS Ground Services Company Limited</span>
    //                 </div>
    //                 <div>
    //                     <strong>ตำแหน่ง : </strong>
    //                     <span>Passenger Service Agent</span>
    //                 </div>
    //                 <div>
    //                     <strong>จังหวัด : </strong>
    //                     <span>ภูเก็ต</span>
    //                 </div>
    //                 <div>
    //                     <strong>สถานที่ : </strong>
    //                     <span>ท่าอากาศยานนานาชาติภูเก็ต</span>
    //                 </div>
    //                 <div>
    //                     <strong>ช่วงเวลาที่ทำงาน : </strong>
    //                     <span>2 เมษายน 2561 - 31 กรกฎาคม 2561</span>
    //                 </div>
    //                 <div>
    //                     <strong>รายละเอียดการทำงาน : </strong>
    //                     <ul>
    //                         <li>เช็คอิน โหลดกระเป๋า และออกบอร์ดดิ้งพาสให้ผู้โดยสาร</li>
    //                         <li>เตรียมเอกสาร ก่อน - หลัง เที่ยวบิน</li>
    //                         <li>ประสานงานกับลูกเรือเกี่ยวกับเอกสารของเที่ยวบินและผู้โดยสารพิเศษในเที่ยวบินนั้นๆ ให้ลูกเรือทราบ</li>
    //                         <li>รับ - ส่ง ผู้โดยสารที่ประตูเครื่องบิน</li>
    //                     </ul>
    //                 </div>
    //                 <div>
    //                     <button onClick={EditForm}>แก้ไขข้อมูล</button>
    //                 </div>
    //             </div>
    //         </div>

    //         <div className="Education-detail">
    //             <img alt = "บริษัท รัตนากร แอสเซท จำกัด" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHWcQzh44qhFluFuZ-oeF3qrD6sxeGeKP9xw&s"></img>
    //             <div>
    //                 <div>
    //                     <strong>บริษัท : </strong>
    //                     <span>บริษัท รัตนากร แอสเซท จำกัด</span>
    //                 </div>
    //                 <div>
    //                     <strong>ตำแหน่ง : </strong>
    //                     <span>บัญชีตลาด</span>
    //                 </div>
    //                 <div>
    //                     <strong>จังหวัด : </strong>
    //                     <span>ชลบุรี</span>
    //                 </div>
    //                 <div>
    //                     <strong>สถานที่ : </strong>
    //                     <span>ออฟฟิศ เลขที่ 300/8 หมู่ 10 ซอย - ถนน - ตำบล หนองปรือ อำเภอ บางละมุง จังหวัด ชลบุรี 20150</span>
    //                 </div>
    //                 <div>
    //                     <strong>ช่วงเวลาที่ทำงาน : </strong>
    //                     <span>8 ตุลาคม 2561 - 31 ตุลาคม 2562</span>
    //                 </div>
    //                 <div>
    //                     <strong>รายละเอียดการทำงาน : </strong>
    //                     <ul>
    //                         <li>คำนวณค่าเช่าแผงตลาด ค่าน้ำ ค่าไฟ ค่าขยะ และค่าใช้จ่ายในแต่ละเดือน - ปี ที่ต้องเรียกเก็บ</li>
    //                         <li>ออกใบเรียกเก็บให้ผู้เช่าแผงตลาดทุกเดือน</li>
    //                         <li>ตามเงินผู้เช่าที่จ่ายเงินไม่ตรงกำหนดและเรียกเก็บค่าจ่ายเงินล่าช้า</li>
    //                         <li>ทำรายงานรายรับและยอดค้างของผู้เช่าส่งให้หัวหน้าทุกวัน</li>
    //                         <li>ทำเอกสารชี้แจงรายละเอียดเกี่ยวกับปัญหาผู้เช่าให้หัวหน้าทราบ</li>
    //                         <li>ออกตรวจเช็คสต๊อกโรงแรมในเครือบริษัทว่าแต่ละห้องมีของบริการลูกค้าครบถ้วนตามมาตรฐานหรือไม่</li>
    //                         <li>ทำเอกสารค่าคอมมิชชั่นประจำเดือน</li>
    //                         <li>ทำงานส่วนอื่น ๆ ที่หัวหน้ามอบหมาย</li>
    //                     </ul>
    //                 </div>
    //             </div>
    //         </div>

    //         <div className="Education-detail">
    //             <img alt="บริษัท บ้านอำเภอเทรดดิ้ง จำกัด" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6sVSXh61ssUUKx2G-ks6gwt_XGaI6UJWbnA&s"></img>
    //             <div>
    //                 <div>
    //                     <strong>บริษัท : </strong>
    //                     <span>บริษัท บ้านอำเภอเทรดดิ้ง จำกัด</span>
    //                 </div>
    //                 <div>
    //                     <strong>ตำแหน่ง : </strong>
    //                     <span>ศูนย์จ่ายคอนกรีต</span>
    //                 </div>
    //                 <div>
    //                     <strong>จังหวัด : </strong>
    //                     <span>ชลบุรี</span>
    //                 </div>
    //                 <div>
    //                     <strong>สถานที่ : </strong>
    //                     <span>ออฟฟิศ เลขที่ 31 หมู่2 ต.นาจอมเทียน อ.สัตหีบ จ.ชลบุรี 20250</span>
    //                 </div>
    //                 <div>
    //                     <strong>ช่วงเวลาที่ทำงาน : </strong>
    //                     <span></span>
    //                 </div>
    //                 <div>
    //                     <strong>รายละเอียดการทำงาน : </strong>
    //                     <p>รับจองงานคอนกรีตจากเซลล์และลูกค้า</p>
    //                     <p>จ่ายงานให้คนขับรถโม่จัดส่งคอนกรีตตามวันและเวลาที่ลูกค้าจอง</p>
    //                     <p>ประสานงานกับลูกค้าเกี่ยวกับคอนกรีตและช่วยประสานงานขายกับเซลล์</p>
    //                     <p>ทำรายงานเกี่ยวกับลูกค้าที่จองคอนกรีตระหว่างวันและโทรติดตามการใช้คอนกรีตของลูกค้าทุกวัน</p>
    //                     <p>รับเรื่องร้องเรื่องจากลูกค้าและประสานงานต่อให้หัวหน้าเพื่อหาแนวทางปรับปรุงแก้ไขข้อผิดพลาดจากการทำงาน</p>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // )