
// Render React component using conditions &&

import { createRoot } from "react-dom/client";

function CheckAnswer(props){
    return(
        <>
        {props.AttempSideQuestions && <h1>I Got {props.AttempSideQuestions} news of Your result </h1>}
        </>
    )
}
createRoot(document.getElementById('root')).render(<CheckAnswer AttempSideQuestions = "Good"/>)