import React, {useState} from "react";
import PropTypes from "prop-types";



export default function Textform({heading,mode,showAlert}) {
  const handleUpClick =()=>{
    // console.log("uppercase was clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText);
    showAlert("Converted to upper case", "success");
  }

  const handleLowClick =()=>{
    let newText = text.toLowerCase();
    setText(newText);
    showAlert("Converted to lower case", "success");
  }

  const handleOnChange =(event)=>{
    // console.log("OnChange");
    setText(event.target.value);
  }

  const copy=()=>{
    var text = document.getElementById("myBox");
    console.log("hello");
    text.select();
    navigator.clipboard.writeText(text.value);
    showAlert("Text copied", "success");
  }


  const handleExtraSpaces = () => {
       let newText = text.split(/[  ]+/); 
       setText(newText.join(" "));
       showAlert("Extra spaces removed", "success");
  }


  const [text,setText] = useState('Enter the text here');
    return (
    <>
      <div className="container" style={{color:mode==="dark"?"white":"#05427f"}}>
        <h1>{heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:mode==="dark"?"grey":"white",color:mode==="dark"?"white":"black"}}  id="myBox" rows="15"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={copy}>Copy text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove extra space</button>
      </div>

      <div className="container my-2" style={{color:mode==="dark"?"white":"#05427f"}}>
        <h1>Your text summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>you will take {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}min to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"enter text to preview"}</p>
      </div>
    </>
    );
}

Textform.prototypes = {
  heading : PropTypes.string.isRequired
}
