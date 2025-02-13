
import Nav from "../component/Nav"
import "../style/contect.css"

const Contect = () => {
    return(
        <div className="container-contact">
            <Nav />
            <div className="contact">
                <div className="contact-detail">
                    เบอร์โทร : <span>061 - 8569658</span>
                </div>
                <div className="contact-detail">
                    <div className="contact-icons">
                        social media 
                        <div><i class="fa-brands fa-facebook"></i> : <span>Good Luck Smile'z</span></div>
                        <div><i class="fa-brands fa-square-x-twitter"></i> : <span>@mymemildz</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contect