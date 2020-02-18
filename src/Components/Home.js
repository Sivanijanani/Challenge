import React from 'react'
import Nav from './Navbar'
import Main from './Main'

class Home extends React.Component {
    render() {
        return (
            <div>
                <h2>Team list</h2>
                <div><Nav/></div>
                <div><Main/></div>
            </div>
        )
    }
}

export default Home;