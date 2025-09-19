
//Controlled Component (Repetitive code )

import React ,{useState} from "react";
import { createRoot } from "react-dom/client";

function Authentication(){
    //Declare seprate state to store Values 
    const [name , setName] = useState("");
    const [password, setPassword] = useState("");
    const [emailId, setemailId] = useState("");

    //Updates the changes when user Type Somethings
    function HandleUpdates(event){
        const {name, value} = event.target;

        if(name == "username"){
            setName(value);
        }
        else if(name == "password"){
            setPassword(value);
        }else if(name == "emailId"){
            setemailId(value);
        }
    }

    return(
        <div>
            <input 
            type="Text"
            name = "username"
            placeholder="Enter Name "
            value={name}
            onChange={HandleUpdates}/>
            <br/>
            <br/>
            <br/>
            <input 
            type="password"
            name="password"
            placeholder="Enter password"
            value={password}
            onChange={HandleUpdates}/>
            <br/>
            <br/>
            <br/>
            <input 
            type="emailId"
            name="emailId"
            placeholder="Enter-EmailID"
            value={emailId}
            onChange={HandleUpdates}/>

            <p>Name :{name}</p>
            <p>password : {password}</p>
            <p>Email-Id : {emailId}</p>
        </div>
    )
}

createRoot(document.getElementById('root')).render(<Authentication/>)