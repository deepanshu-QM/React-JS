
//Rendering List through map() array 


import { createRoot } from "react-dom/client";

function Fruits(){
    const fruits = ["Apple", "Mango", "Gauva", "WaterMelon"];
    return(
        <>
        <h1>Here is list Of fruits Liked my his-Highness</h1>
        <ul>
            {fruits.map((fruits) => <li>I Like { fruits }</li>)}
        </ul>
        </>
    )
}

createRoot(document.getElementById('root')).render(<Fruits/>)

/*    Alternative 
fruits.map(function(fruits) {
<li>I like {fruits}</li>
}

*/