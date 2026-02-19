// import logo from './logo.svg';

import "../style/app.css"
import Nav from "../component/Nav";
import Introduction from "../page/Introduction"
import { useRef , useState , useEffect} from "react";
import { Shareinfo } from "../ShareInfo";

function App() {
  const NavHeight = useRef(null);

  const [GetNavHeight , SetNavHeight] = useState(0);

  useEffect(()=>{
      if(NavHeight.current){
        SetNavHeight(NavHeight.current.offsetHeight)
      }else {
        console.log("ไม่มีข้อมูลความสูง Navbar")
      }
  },[])

  useEffect(()=>{
      console.log(GetNavHeight)
  },[GetNavHeight])

  return (
    <Shareinfo.Provider value={{GetNavHeight}}>
        <div className="app">
            <Nav NavHeight = {NavHeight}/>
            <Introduction GetNavHeight = {GetNavHeight}/>
        </div>
    </Shareinfo.Provider>



  );


}

export default App;


    