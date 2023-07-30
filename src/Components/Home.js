import React, { useState } from 'react'


export default function Textform(props) {

              const handleonChange = (event)=> {
                 setText(event.target.value);
                }   

            const handleUpClick = ()=>{
                let newtext = text.toUpperCase();
                setText(newtext);
                props.ShowAlert("Converted to Uppercase !", "success");
            }

            const handleLoClick = ()=>{
                let newtext = text.toLowerCase();
                setText(newtext);
                props.ShowAlert("Converted to Lowercase !", "success")
            }

            const handleClearClick = ()=>{
                let newtext = "";
                setText(newtext);
                props.ShowAlert(" Text Cleared ", "success")
            }

            const handleCopy = ()=>{
                navigator.clipboard.writeText(text);
                props.ShowAlert("Text copied to Clipboard", "success")
            }


            
            const [text, setText] = useState("")

            const WordCount = text.trim().split(" ").filter(Boolean).length;
            const CharCount = text.trim().length;
            const MinutesToRead = 0.008 * text.length;

  return (
    <>
       {/* style={{color : props.mode === 'dark' ? 'white' : 'black'}} */}
        <div className="container"  >
            <div className="my-3">
                <h1>Enter the Text to analyze below</h1>
            </div>
            <div className="mb-3 ">
                <textarea className="form-control" id="mybox" rows="8" value={text} onChange={handleonChange}
                style={{backgroundColor: props.mode === 'dark' ? '#5b6166' : 'white',
                        color : props.mode === 'dark' ? 'white' : 'black' }}>
                </textarea>
            </div>
            <button disabled ={text.length===0} type="button" className="btn btn-primary mx-2" onClick={handleUpClick} >Convert TO Uppercase</button>
            <button disabled ={text.length===0} type="button" className="btn btn-primary mx-2" onClick={handleLoClick} >Convert TO Lowercase</button>
            <button disabled ={text.length===0} type="button" className="btn btn-primary mx-2" onClick={handleClearClick} >Clear Text</button>
            <button disabled ={text.length===0} type="button" className="btn btn-primary mx-2" onClick={handleCopy} >Copy Text</button>
        </div>
        <div className="container my-4" >
            <h1>Your Text Summary</h1>
            <p>{WordCount} Words and {CharCount} Characters</p>
            <p>{MinutesToRead} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : "Enter something in the textbox above to preview here"}</p>
        </div>
    </>   
  )
}   
