
// Render React component using conditions 

import { createRoot } from "react-dom/client";

function MissedGoal(){
    return(
        alert("You Missed Goal")
    )
}

function MadeGoal(){
    return(
        alert("Nailed it .. , A Goal")
    )
}

function CheckGoal(props){
    const isGoal = props.isGoal;
    if(isGoal){
        return <MissedGoal/>;
    }
    return <MadeGoal/>;

}

createRoot(document.getElementById('root')).render(<CheckGoal isGoal = {true}/>)