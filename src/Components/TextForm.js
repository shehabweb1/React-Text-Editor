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
        setColor('red');
    };

    const [color, setColor] = useState();

    const [active, setActive] = useState(false);
  
    const handleCopy = () => {
        const text = document.getElementById('textForm');
        text.select();
        navigator.clipboard.writeText(text.value);
        
    };

    const handleExtra = () => {
        const newText = text.split(/[ ]+/);
        setText(newText.join(' '));
    };

    const handleCapitalize = () => {
        const lower = text.toLowerCase();
        const capital = lower.charAt(0).toUpperCase() + lower.slice(1);
        setText(capital);
    }

  return (
    <>
    <div className='container my-3' style={{color: props.textColor}}> 
        <h1>{props.heading}</h1>       
        <div className="mb-3">            
            <textarea value={text} onChange={handleOnChange} className="form-control" rows="7" id='textForm' style={{backgroundColor : props.bodyColor, color: props.textColor}}></textarea>
        </div>
        <button className='btn btn-success mx-2' onClick={handleCapitalize}>Convert To Capital</button>
        <button className='btn btn-success' onClick={handleUpClick}>Convert To UpperCase</button>
        <button className='btn btn-success mx-2' onClick={handleLowClick}>Convert To LowerCase</button>        
        <button className='btn btn-secondary mx-2' onClick={handleOnClear}>All Clear</button>        
        <button className='btn btn-secondary mx-2' onClick={handleCopy}>Copy Text</button>        
        <button className='btn btn-secondary mx-2' onClick={handleExtra}>Remove Extra Space</button>

        <div className='my-5'>
            <h3>Your text summary</h3>
            <p>{text.split(" ").length} Word and {text.length} Character </p>
            <p>Reading Time: {0.008 * text.split(" ").length} Minutes</p>
        </div>

        <div className='my-3'>
            <h3>Preview</h3>        
            <div className='border border-secondary p-3' style={{height:"50vh", overflow: "auto" , color: active ? color : props.textColor, backgroundColor : props.bodyColor}}
            
            >{text}</div>
            <button className='btn btn-danger my-2' onClick={handleColor}>Change color</button>
        </div>   
    </div>    
    </>
  )
}
