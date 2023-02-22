import React, {useState} from "react";
// import PropTypes from 'prop-types'

export default function Textarea(props) {
  const clickUpChange = () => {
    let newText = text.toUpperCase();
    // console.log("Click on button for changing upper case");
    setText(newText);
    props.showAlert("Convet to Uppercase!","success")
  };
  const clickLoChange = () => {
    let NewText = text.toLowerCase();
    setText(NewText);
    props.showAlert("Convert to Lowercase!","success")
  };
  const clickToChange = (event) => {
    // console.log("on Change");
    setText(event.target.value);
  };
  const clickClearChange = () => {
    let newtext = "";
    setText(newtext);
    props.showAlert("Clear text!","success")
  };
  const handleCopyText = () => {
    let text = document.getElementById("myBox");
    text.select();
    document.getSelection().removeAllRanges();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy text!","success")
  };
  const handleExtraSpace = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("Removed Extraspaces!","success");
  };

  const [text, setText] = useState("");

    
  
  return (
    <>
      <div className="container " style={{ color: props.mode === 'dark'?'white':'black',fontFamily:"sans-serif"} }>
      
        <h1 className="mb-4">{props.heading}</h1>
        
          <div className="mb-3  "style={{ color: props.mode === 'dark'?'white':'black'}}>
            <textarea
              className="form-control"
              value={text}
              onChange={clickToChange}
              id="myBox"
              rows="8" style={{ backgroundColor: props.mode === 'dark'?'#0e172c':'white', color: props.mode === 'dark'?'white':'black'}}
            ></textarea>
          </div>
          <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={clickUpChange}>
            Convert to Uppercase
          </button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={clickLoChange}>
            Convert to LowerCase
          </button>
          <button disabled={text.length===0}
            className="btn btn-primary mx-1 my-2"
            onClick={clickClearChange}
          >
            Clear Text
          </button>
          <button disabled={text.length===0}
            className="btn btn-primary mx-1 my-2"
            onClick={handleCopyText}
          >
            Copy Text
          </button>
          <button disabled={text.length===0}
            className="btn btn-primary mx-1 my-2"
            onClick={handleExtraSpace} 
          >
            Remove ExtraSpace
          </button>
        </div>
      
      <div className="container my-3"style={{ color: props.mode === 'dark'?'white':'black',fontFamily:"sans-serif"}}>
        <h1>Summary Of Text</h1>
        <p>
          {/* Total Words {text.split(" ").length === 1?0:text.split(" ").length-1} And {text.length} characters */}
           {text.split(/\s+/).filter((element)=>{return element.length!==0 }).length} Words And {text.length} characters
        </p>
        <p> {0.008 *  text.split(" ").filter((element)=>{return element.length!==0 }).length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Nothing to preview'}</p>
      </div>
    </>
  );
}
