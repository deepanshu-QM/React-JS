import React from "react";
import { createRoot } from "react-dom/client";

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {favoritecolor : "red"};
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({favoritecolor:"green"});
        }, 6000)
    }
    render(){
        return(
            <h1>This Color is Changing to {this.state.favoritecolor}</h1>
        );
    }
}

createRoot(document.getElementById('root')).render(<Header/>)