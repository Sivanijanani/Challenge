import React from 'react'
import Nav from './Navbar'
import Main from './Main'
import { Link ,BrowserRouter,Route} from "react-router-dom";


class Home extends React.Component {
    render() {
        return (
            <div>
                <h2>Select Builder Schedule</h2>
                <BrowserRouter>
                <div><Nav/></div>
                <div><Main/></div>
                </BrowserRouter>
            </div>
        )
    }
}

export default Home;