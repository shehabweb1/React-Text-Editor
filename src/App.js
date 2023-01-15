import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './Components/About';


function App() {

  const [mode, setMode] = useState('white');
  const [btnColor, setBtnColor] = useState('black');
  const body = document.querySelector('body');
  const [bodyColor, setBodyColor] = useState('white'); 
  const [textColor, setTextColor] = useState('black'); 
  const handleMode = () => {
   if(mode === 'white') {
      setMode('dark');
      setBtnColor('white');
      body.style.backgroundColor = "#0f0f0f";
      setBodyColor("#717171");
      setTextColor('white')
    }else{
      setMode('white');
      setBtnColor('black');
      body.style.backgroundColor = "white";
      setBodyColor('white');
      setTextColor('black')
    }
  }


  return (
    <>      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar title="TextEditor" aboutText="About Us" mode={mode} handleMode={handleMode} btnColor={btnColor}/>}>
          <Route index element={<TextForm heading="This is React Text Editor" bodyColor={bodyColor} textColor={textColor}/>} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;