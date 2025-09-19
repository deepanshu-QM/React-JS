
//Authentication 
import React ,{useState}  from "react";
import { createRoot } from "react-dom/client";

function Authentication(){
    const [formData, setformData] = useState({
        name :"",
        password :"",
        emailId :"",
    });


    function HandleChanges(event){
        const {name , value} = event.target;

        setformData((prev) =>({
            ...prev,
            [name] : value
        }));
    }

    return(
        <div>
            <input 
            type="Text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={HandleChanges}/>
            <br/>
            <br/>
            <br/>

            <input 
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={HandleChanges}/>
            <br/>
            <br/>
            <br/>
            <input 
            type="email"
            name="emailId"
            placeholder="Enter emailId"
            value={formData.emailId}
            onChange={HandleChanges}/>
            <br/>
            <br/>
            <br/>

            <p>Name : {formData.name}</p>
            <p>Password : {formData.password}</p>
            <p>EmailId : {formData.emailId}</p>
        </div>
    )
}

createRoot(document.getElementById('root')).render(<Authentication/>)