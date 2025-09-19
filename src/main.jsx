//Controlled cOMPONENT IN rEACT 


import React, {useState} from "react";
import { createRoot } from "react-dom/client";
function NameForm(){
    //Declare a state to store the values 
    const [name , setName] = useState("")

    //Update the state when user type Something 
    function HandleChanges(event){
        setName(event.target.value);                //etv
    }
    return(
        <div>
            <input type="Text" value= {name} onChange={HandleChanges}/>
            <p>Your Name is : {name}</p>
        </div>
    )
}

createRoot(document.getElementById('root')).render(<NameForm/>)