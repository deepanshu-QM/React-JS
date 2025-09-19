
//React -Form (basic-version)

import { createRoot } from "react-dom/client";

function Form(){
    return(
        <form>
            <label>
                Enter_Your_Name
                <input type="text"/>
            </label>
        </form>
    )
}
createRoot(document.getElementById('root')).render(<Form/>)