
import "./App.css";
import Navbar from './Components/Navbar'

import Alert from './Components/Alert'

import About from './Components/About'
import React ,{ useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Textarea from "./Components/Textarea";
// import { type } from "@testing-library/user-event/dist/type";
function App(){
 const[mode , setMode]=useState('light');
const toggleMode = ()=>{
  if(mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor = '#1d054a'
    showAlert("Dark Mode Enabled","success");
    document.title = "TextUtil Dark mode";
    // setInterval(() => {
    //   document.title = "TextUtil is Amezing Mode";
    // }, 2000);
      
    // setInterval(() => {
    //   document.title = " Install TextUtil Now!";
    // }, 1500);
  }
  else{
    setMode('light')
    document.body.style.backgroundColor = 'white'
    showAlert("Light Mode Enabled","success");
    document.title = "TextUtil Light mode";
  }
}
const[alert , setAlert]=useState(null);
const showAlert=(message, type)=>{
setAlert({
  msg:message,
  type:type
})
setTimeout(() => {
  setAlert(null)
}, 1500);
}
  return (
    <>
  
 <Router>
 <Navbar title = "TextUtil" About="About "  mode ={mode} toggleMode={toggleMode}/>
 <Alert alert ={alert}/>
      <Routes>
        <Route exact path="/" element={<Textarea showAlert={showAlert} heading="TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode}/>} />
          <Route exact path="/about" element={<About mode={mode}/>} />
      </Routes>
    </Router>
 </> 
 );

}

export default App;
 