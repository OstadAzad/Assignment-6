import "./Content.css"
import { useState } from "react";

const Content = () => {
    const [text, setText] = useState("");

    const handleButtonClick =()=>
    {
        alert(text);
    }
        const handleTextAreaChange =(event)=>
        {
            setText(event.target.value);
        }

    return (
        <div>
         <h5 className="text-center bcolor1"><textarea rows="4" cols="50" onChange={handleTextAreaChange}/></h5>
         <p><br/></p>
         <h6 className="text-center bcolor2"><button onClick={handleButtonClick}>Click & Display Text</button></h6>
         <p><br/></p>
         <p><br/></p>
         <p className="text-center bcolor3">{text}</p>
        </div>
    );
};

export default Content;