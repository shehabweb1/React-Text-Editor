import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Write text here');

    const handleOnChange = (e) => {        
        setText(e.target.value);
    };

    const handleOnClear = (e) => {
        setText(e.target.value = "");
    };

    const handleUpClick = () => {
        const newText = text.toUpperCase();
        setText(newText);
    };
    const handleLowClick = () => {
        const newText = text.toLowerCase();
        setText(newText);
    };
    const handleColor = () => {
        setActive(!active);
        setColorx('red');
    };

    const [colorx, setColorx] = useState();

    const [active, setActive] = useState(false);
  

  return (
    <>
    <div className='container my-3'> 
        <h1>{props.heading}</h1>       
        <div className="mb-3">            
            <textarea value={text} onChange={handleOnChange} className="form-control" rows="7"></textarea>
        </div>
        <button className='btn btn-success' onClick={handleUpClick}>Convert To UpperCase</button>
        <button className='btn btn-success mx-2' onClick={handleLowClick}>Convert To LowerCase</button>
        <button className='btn btn-secondary mx-2' onClick={handleOnClear}>All Clear</button>        
    </div>
    <div className='container my-5'>
        <h3>Your text summary</h3>
        <p>{text.split(" ").length} Word and {text.length} Character </p>
        <p>Reading Time: {0.008 * text.split(" ").length} Minutes</p>
    </div>
    <div className='container my-3'>
        <h3>Preview</h3>        
        <div className='border border-secondary p-3' style={{height:"50vh", overflow: "auto" , color: active ? colorx : "black"}}>{text}</div>
        <button className='btn btn-success my-2' onClick={handleColor}>Change color</button>
    </div>
    </>
  )
}
