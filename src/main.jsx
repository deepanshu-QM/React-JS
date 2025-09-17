import React from "react";
import { createRoot } from "react-dom/client";

function Son(props){
    return(
        <div style={{backgroundColor:"lightpink"}}>
            <h2>This is Your Son David  Lives near {props.location}</h2>
            <div>{props.FromParent}</div>
        </div>
    );
}

function Daughter(props){
    const {location, shopping, Vlogs} = props;
    return(
        <div style={{backgroundColor:"lightpink"}}>
            <h2>Liyana is in {props.location} because she loves {props.shopping} , {props.Vlogs}</h2>
            <div>{props.FromParent}</div>
        </div>
    );
}

function Parents(){
    return(
        <div>
            <h1>Son and daughter a Beautifull Gift I have </h1>
            <Son location="New-York">
                <p>This is Written in parent componenet and will Displayed in son component</p>
            </Son>

            <Daughter location="Infinity - mall" shopping = "Clothing " Vlogs="Vlogging">
                <p>This is Written in parent componenet and will Displayed in Daughter component</p>
            </Daughter>
        </div>
    );
}

createRoot(document.getElementById('root')).render(<Parents/>)