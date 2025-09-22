
//React Submit Form -->
//You can control the submit action by adding an event handler in the onSubmit attribute for the form

import React, {useState} from 'react';
import { createRoot } from 'react-dom/client';

function Form(){
    const [name, setName] = useState("");

    function HandleUpdate(event){
        setName(event.target.value);
    }

    function HandleSubmit(event){
        event.preventDefault();
        alert(name);
    }

    return(
        <form onSubmit={HandleSubmit}>
            <lablel>Enter Your Name : 
                <input type='text' value={name} onChange={HandleUpdate}/>
            </lablel>

            <input type ='submit'/>
        </form>
    )

}

createRoot(document.getElementById('root')).render(<Form/>)