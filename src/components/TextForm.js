/* eslint-disable no-restricted-globals */
/* eslint-disable no-empty-character-class */
import React from 'react'
import { useState } from 'react'

export default function TextForm(props) { 

    const handle_UpClick = (event) => {
        // console.log("buttin clicked" + text );
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to UPPER CASE !", "success");
    }

    const handle_LowClick = ()=> {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to LOWER CASE !", "success")
    }

    const handle_onChange = (event) => {
        // console.log("Changed");
        setText(event.target.value);
    }


    const handle_ClearText = () => {
        let newValue = "";
        setText(newValue)
        props.showAlert("Text got cleared !", "success")
    }

    const handle_CopyText = () => {
        // let text = document.getElementById("text-box");
        // text.select();
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
        props.showAlert("Text got copied to Clipboard !", "success")
    }

    const handle_ExtraSpace = () => {
        let newtext  = text.split(/[ ]+/);
        setText(newtext.join(" "))
        props.showAlert("Extra Space got removed from Text !", "success")
    }


    const [text, setText] = useState('');

    return (
        <>
            <div className="container" style = {{color: props.mode === 'light'? '#041954': 'white'}}>
                <h3 style = {{color: props.mode === 'light'? '#041954': 'white'}} className = 'my-2'>{props.heading}</h3>
                <div className="mb-2">
                    <textarea className="form-control" id="text-box" rows="8" value={text} style = {{backgroundColor: props.mode === 'light'? '#041954': 'white', color: props.mode === 'light'? 'white':'#041954'}} onChange={handle_onChange}></textarea>
                </div>
                <button className="btn btn-outline-warning text btn-sm mx-3 col-2 fw-bold fw-italic" onClick={handle_UpClick} disabled = {text.length === 0}>Convert to Upper Case</button>
                <button className="btn btn-outline-warning text btn-sm mx-3 col-2 fw-bold fw-italic" onClick={handle_ExtraSpace} disabled = {text.length === 0}>Remove Extra Spaces</button>
                <button className="btn btn-outline-warning text btn-sm mx-3 col-2 fw-bold fw-italic" onClick={handle_CopyText} disabled = {text.length === 0}>Copy Text</button>
                <button className="btn btn-outline-warning text btn-sm mx-3 col-2 fw-bold fw-italic" onClick={handle_LowClick} disabled = {text.length === 0}>Convert to Lower Case</button>
                <button className="btn btn-outline-warning text btn-sm mx-3 col-2 fw-bold fw-italic" onClick={handle_ClearText} disabled = {text.length === 0}>Clear Text</button>
                
                
            </div>

            <div className="container my-5" style = {{color: props.mode === 'light'? '#041954': 'white'}}>
                <h2>Your Text Summary</h2>
                <p>{text.split(/\s+/).filter((element) => {return element.length!==0}).length} Words {text.length} Characters</p>
                <p>{0.008 * text.split(" ").filter((element) => {return element.length!==0}).length} Minutes Read</p>
                <h5>Preview</h5>
                <p>{text.length > 0? text: "Nothing to preview"}</p>
            </div>
        </>
    )
}