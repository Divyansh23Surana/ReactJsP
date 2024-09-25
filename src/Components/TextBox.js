import React, { useState } from 'react'
import Alert from './Alert'
export default function TextBox(props) {
    const [text,setText]=useState("Text")
    const [message,showMessages]=useState("")
    const ChangeText=()=>{
        var Stext=text.toUpperCase();
        setText(Stext);
        showMessages("Text has been converted to UpperCase")
    }
    const onchange=(event)=>{
      
        setText(event.target.value);
    }
  return (
    <>
    <div>
        <h1>{props.heading}</h1>
       <div className="mb-3">
    <label htmlFor="text" className="form-label"></label>
    <textarea type="text" onChange={onchange} className="form-control" rows="3"/>
    <br></br>
    <button className='btn btn-primary' onClick={ChangeText}>ChangeText</button>

    <br></br>  <br></br>

    <Alert alertMessage={message}/>
    <h3>Changed Text = {text}</h3>
    <h3>Text Summary</h3>
    <h5>{text.split(" ").length} Words {text.length} Character</h5>
  </div>
    </div>
    </>
  )
}
