import React, {useState} from 'react'

export default function TextForm(props) {
    const handlingupclick = ()=>{
        console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase!","success");
    }
    const handlinglowclick = ()=>{
        console.log("lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lowercase!","success");
    }
    const handlingtitleclick = ()=>{
        console.log("uppercase was clicked" + text);
        let newText = (' ');
        setText(newText)
    }
    const handleCopy = ()=>{
        console.log("I am a copy");
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!","success")
    }

    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value)
    }
    
    const [text , setText] = useState('');
  return (
    <>
    <div className="container" style = {{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">

        <textarea className="form-control" value={text} onChange={handleOnChange}style = {{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='light'?'grey':'white'}}id="myBox"rows="3"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick = {handlingupclick}>convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick = {handlinglowclick}>convert to lowercase</button>
        <button className="btn btn-primary mx-2" onClick = {handlingtitleclick}>clear text</button>
        <button className="btn btn-primary mx-2" onClick = {handleCopy}>copy text</button>
    </div>
    <div className="container my-3" style = {{color: props.mode==='dark'?'white':'#042743'}}>
        <h1> your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length}</p>
        <h2>Preview</h2>
        <p>{text.lenth>0?text:"Enter your text above to preview "}</p>


    </div>
    </>
  )
}
