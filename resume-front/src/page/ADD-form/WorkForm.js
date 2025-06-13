

const WorkForm = () =>{
    return(
        <div className="box-form">
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
                        <label>Image URL</label>
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
    )
}

export default WorkForm