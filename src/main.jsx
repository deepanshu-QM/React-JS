
//Authentication-Box with css
import React, {useState} from "react";
import { createRoot } from "react-dom/client";

function Authentication(){
    const [formData, setForm] = useState({
        name: "",
        password: "",
        email: "",
    });
    function HandleCheck(event){
        const {name, value} = event.target;

        setForm((prev) => ({
            ...prev,
            [name]:value
        }));
}

const containerStyle = {
    backgroundColor:"#e0d608",
    margin:"50px auto",
    padding:"30px",
    height:"500px",
    width:"500px",
    border:"solid 2px",
    textAlign :"center",
};

const inputStyle = {
    padding : "10px",
    margin :"20px",
    width:"300px",
    textAlign:"center"
}
return(
    <div style= {containerStyle}>
        <input 
        type="text"
        name = "name"
        placeholder="Enter Name "
        value = {formData.name}
        onChange = {HandleCheck} 
        style = {inputStyle}/>
        <br/>

        <input 
        type="password"
        name = "password"
        placeholder="Enter Password "
        value = {formData.password}
        onChange = {HandleCheck} 
         style = {inputStyle}/>
        <br/>

        <input 
        type="email"
        name = "email"
        placeholder="Enter Email "
        value = {formData.email}
        onChange = {HandleCheck}
         style = {inputStyle}/>
        <br/><br/>
        <p>Name : {formData.name}</p>
        <p>Password : {formData.password}</p>
        <p>Email : {formData.email}</p>
    </div>
)
}

createRoot(document.getElementById('root')).render(<Authentication/>)