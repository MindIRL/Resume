// import logo from './logo.svg';

import "../style/app.css"
import Nav from "../component/Nav";
import Introduction from "../page/Introduction"
import { useRef , useState , useEffect} from "react";

function App() {

  const NavHeight = useRef(null);

  const [GetNavHeight , SetNavHeight] = useState();

  useEffect(()=>{
      if(NavHeight.current){
        SetNavHeight(NavHeight.current.offsetHeight)
      }else {
        console.log("ไม่มีข้อมูล")
      }
  },[])

  useEffect(()=>{
      console.log(GetNavHeight)
  },[GetNavHeight])

  return (
    <div className="app">
        <Nav NavHeight = {NavHeight}/>
        <Introduction GetNavHeight = {GetNavHeight}/>
    </div>



  );


}

export default App;


    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>