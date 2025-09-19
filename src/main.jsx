
//Key , map() , Render React component by using map() function for iteration , arrayb, key -values pair

import { createRoot } from "react-dom/client";

function StudentInfo(){
    const info = [
  { id: 90221,  Name: "John Lenin",     gpa: 4.6, isPlaced: true },
  { id: 90222,  Name: "Alice Carter",   gpa: 5.0, isPlaced: true },
  { id: 90223,  Name: "Michael Brown",  gpa: 3.9, isPlaced: false },
  { id: 90224,  Name: "Sophia Davis",   gpa: 4.0, isPlaced: true },
  { id: 90225,  Name: "Ethan Wilson",   gpa: 4.2, isPlaced: true },
  { id: 90226,  Name: "Olivia Martin",  gpa: 5.0, isPlaced: true },
  { id: 90227,  Name: "Daniel Clark",   gpa: 4.9, isPlaced: true },
  { id: 90228,  Name: "Emma Johnson",   gpa: 3.1, isPlaced: false },
  { id: 90229,  Name: "William Scott",  gpa: 4.5, isPlaced: false },
  { id: 902210, Name: "Sophia Miller",  gpa: 5.0, isPlaced: true }
]
return(
    <>
    <h1>This is Official status  of Group : Akira</h1>
    <ul>
        {info.map((students) => <li key={students.id}>{students.Name} has Score : {students.gpa}/5 , placementStatus : {students.isPlaced ? "Placed " : "Not Placed "}</li>)}
    </ul>
    </>
) 
}

createRoot(document.getElementById('root')).render(<StudentInfo/>)