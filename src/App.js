
import "./App.css";


import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";


function App(){
  const [mode, setMode] =useState('light');
  const [activeMode, enMode]= useState('light Mode')
  const [alert, setAlert]=useState(null)
  
  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout( ()=>{
      setAlert(null)
    }, 2000);
  }
 const enableMode = ()=> {
    if(mode == 'light'){
      setMode('dark')
      enMode("Dark Mode")
      document.body.style.backgroundColor ="#121212"
      document.body.style.color ="white"
      showAlert("dark mode enabled", "success")
      document.title='React App | Home Dark*'
    }
     else {
      setMode('light')
      
      enMode("light Mode")
      document.body.style.backgroundColor ="white"
      document.body.style.color ="#121212"
      showAlert("light mode enabled", "success")
      document.title='React App | Home'
    }
    }
  return (
   <>
    
    

  {/* <Navbar/> */}
  <Navbar logo="Test.App" navlink1="Home" navlink2="Projects" navlink3="About" navlink4="Contact"  mode={mode} enableMode={enableMode} activeMode={activeMode}/>
   <Alert alert={alert}/>
   <div className="container">
   <TextForm textarea="Text Field"/>
   <About/>
   </div>
   

    </>
  );
}

export default App;
