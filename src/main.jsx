//React Events 

import React from "react";
import { createRoot } from "react-dom/client";

function TakeAshot(){
    const shoot = () => {
        alert("Great Shot ! ..")
    }

    return(
        <button onClick= {shoot}>Take_Your_Shot</button>
    )
}

createRoot(document.getElementById('root')).render(<TakeAshot/>)

