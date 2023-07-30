import React from 'react';
import { useState } from 'react';
import { Navbar } from './Components/Navbar';
import Home from './Components/Home';
import Alert from './Components/Alert';
import About from './Components/About';
import { Routes, Route } from "react-router-dom";




function App() {
  const [mode, setMode]= useState('light');




    // for dark mode 

  const enableDarkMode = () => {
    if(mode === 'light' && (document.body.style.backgroundColor === 'white'  || document.body.style.backgroundColor === '')){
      setMode('dark');
      document.body.style.backgroundColor = '#2c2f33';
      document.body.style.color = 'white';
      ShowAlert("Dark Mode enabled", "success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
      ShowAlert("Light Mode enabled", "success")

    }
  };  



  // for blue mode 

  const enableBlueMode = () => {
    if(mode === 'light' && document.body.style.backgroundColor === 'white' ){
      setMode('#005893');
      document.body.style.backgroundColor = '#005893';
      document.body.style.color = 'white';
      ShowAlert("Blue Mode enabled", "success")

    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      ShowAlert("Light Mode enabled", "success")

    }
 

  };
  

  // for set alert

    const [alert, setAlert] = useState(null);

     const ShowAlert = (message, type) =>{
      setAlert({
        msg : message,  
        type : type
      })
      setTimeout(() => {
        setAlert(null)
      }, 1700);
    }


  return (
    <>
      <Navbar alert={alert}   mode={mode} enableDarkMode={enableDarkMode} enableBlueMode={enableBlueMode}/>
      <Alert alert={alert}/>
      {/* <Home  mode={mode} ShowAlert={ShowAlert}/> */}
      {/* <About/> */}

      
      <Routes>
         <Route path="/" element={<Home mode={mode} ShowAlert={ShowAlert} />} />
        <Route path='/Home' element={<Home mode={mode} ShowAlert={ShowAlert}/>}/> 
        <Route path="/About" element={<About />} />
      
      </Routes>
    
  </> 
  )
  
}

export default App;
