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
        let text = document.getElementById("text-box");
        text.select();
        navigator.clipboard.writeText(text.value)
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
                <h3 style = {{color: props.mode === 'light'? '#041954': 'white'}}>{props.heading}</h3>
                <div className="mb-2">
                    <textarea className="form-control" id="text-box" rows="8" value={text} style = {{backgroundColor: props.mode === 'light'? '#041954': 'white', color: props.mode === 'light'? 'white':'#041954'}} onChange={handle_onChange}></textarea>
                </div>
                <button className="btn btn-outline-warning text btn-sm mx-3 col-2 fw-bold fw-italic" onClick={handle_LowClick}>Convert to Lower Case</button>
                <button className="btn btn-outline-warning text btn-sm mx-4 col-2 fw-bold fw-italic" onClick={handle_UpClick}>Convert to Upper Case</button>
                <button className="btn btn-outline-warning text btn-sm mx-3 col-2 fw-bold fw-italic" onClick={handle_ExtraSpace}>Remove Extra Spaces</button>
                <button className="btn btn-outline-warning text btn-sm mx-3 col-2 fw-bold fw-italic" onClick={handle_CopyText}>Copy Text</button>
                <button className="btn btn-outline-warning text btn-sm mx-4 col-2 fw-bold fw-italic" onClick={handle_ClearText}>Clear Text</button>
                
                
            </div>

            <div className="container my-5" style = {{color: props.mode === 'light'? '#041954': 'white'}}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length - 1} Words {text.length} Characters</p>
                <p>Data read in {0.008 * text.split(" ").length} Minutes</p>
                <h5>Preview</h5>
                <p>{text.length > 0? text: "Enter some text in the box above to preview it as a Summary"}</p>
            </div>
        </>
    )
}

// TextForm.prototypes = {
//     text-box_name: PropTypes.string,
// }