import React, {useState} from 'react'

export default function TextForm(props) {
    const handleOnChange = (event)=>{
        // console.log("On Change");
        event.preventDefault();
        setText(event.target.value);
      }
  const handleUpClick = (event)=>{
    // console.log("Uppercase was clicked" + text);
    event.preventDefault();
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","success");
  }
  const handleLoClick = (event)=>{
    // console.log("Lowercase was clicked" + text);
    event.preventDefault();
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower","success");
  }
  const handleclearClick = (event)=>{
    // console.log("Lowercase was clicked" + text);
    event.preventDefault();
    let newText = " ";
    setText(newText);
    props.showAlert("Text Cleared","success");
  }
  const handleCopy = (event) => {
    event.preventDefault();
    console.log("I am copy");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard","success");
    
  } 
  const handleExtraSpaces = (event)=>{
    event.preventDefault();
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra Spaces Removed","success");
  }

  const [text, setText] = useState('');
  return (
    <>
    <div className='container'>
        <form>
           <div className="mb-3">
            <h1>{props.heading}</h1>
            <textarea className = "form-control" value = {text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#212529' : 'white' }} id="myBox" rows="8"></textarea>
            <button className="btn btn-primary my-3 mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary my-3 mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary my-3 mx-1" onClick={handleclearClick}>Clear Text</button>
            <button className="btn btn-primary my-3 mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary my-3 mx-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
           </div>
        </form>
    </div>
    <div className="container my-3">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>Requires {0.008 * text.split(" ").length} minutes to read.</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox to preview it here!"}</p>
    </div>
    </>    
  )
}
