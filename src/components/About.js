import React, { useState } from 'react'

export default function About(props) {

    const [pageStyle, setStyle] = useState({
        color: 'black',
        backgroundColor: 'white',
    })

    const [btnText, setBtnText] = useState("Click Here To Read In DARK MODE")

    const toggleStyle = () => {
        if (pageStyle.color === 'black') {
            setStyle({
                color: 'cyan',
                backgroundColor: 'black',
                border: 'solid red 2px'
            })
            setBtnText("Click Here To Read In LIGHT MODE")
        } else {
            setStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtnText("Click Here To Read In DARK MODE")
        }
    }
    return (
        <>
            <div className="container fw-bold fs-1 my-3 mx-0">{props.title}</div>
            <div className="container" style={pageStyle}>
                <div className="container">
                    <p className='my-2 text-'>Dealing with texts is a common day-to-day activity. Here you can find all the text utilities to help you in performing your activity much faster. This includes tools to remove duplicates, specific strings accents from a text, sort lines, remove line breaks, and many others.</p>
                    <br/>
                </div>
            </div>
            <div className='container'>
            <button type='button' className='btn btn-sm col-12 btn-outline-warning my-3' onClick={toggleStyle}>{btnText}</button>
            </div>
        </>
    )
}
