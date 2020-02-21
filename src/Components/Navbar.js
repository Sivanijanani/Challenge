import React from 'react'
import { Link } from "react-router-dom";

class Navbar extends React.Component {
    render() {
        return (           
                <ul>                  
                    <li>
                    <Link to="/all">All</Link>
                    </li>
                    <li>
                    <Link to="/socialinnovation">Social Innovation</Link>
                    </li>              
                </ul>            
        )
    }
}

export default Navbar;