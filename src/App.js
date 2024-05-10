import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#31363F';
      document.body.style.color = 'white';
      showAlert("Dark Mode has been enabled","success");
      document.title = 'TextUtils - Dark Mode'
    }else{
      setMode('light')
      document.body.style.backgroundColor='white';
      document.body.style.color = 'black';
      showAlert("Light Mode has been enabled","success")
      document.title = 'TextUtils - Light Mode'
    }
  }
  return (
    <>
    <BrowserRouter>
      <Navbar title ="TextUtils" aboutText = "About TextUtils" mode ={mode} toggleMode = {toggleMode}/> 
    	<Alert alert = {alert}/>
      <div className="container my-4">
      <Routes>
    		<Route path='/about' element={<About/>}/>
    		<Route path="/" element={<TextForm showAlert={showAlert} heading = "Enter the text to analyse"/>}></Route>	
    	</Routes>
      </div>
    </BrowserRouter>    
    </>
  );
}

export default App;

