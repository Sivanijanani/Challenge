import React from 'react'
import { Link ,BrowserRouter} from "react-router-dom";

class Navbar extends React.Component {
    render() {
        return (           
                <ul>                    
                    <BrowserRouter>
                    <li> <Link to="/home">Home</Link></li>
                    <li><Link to="/All">All</Link></li>  
                    </BrowserRouter>                   
                </ul>            
        )
    }
}

export default Navbar;