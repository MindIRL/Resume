


const KnowledgeForm = () =>{
    return (
        <div className="box-form">
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
    )
}

export default KnowledgeForm