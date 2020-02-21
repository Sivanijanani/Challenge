import React from 'react'
import All from './All'
import SocialInnovation from './SocialInnovation'
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";

class Main extends React.Component {
    constructor(props) {
        super(props);
        }
    render() {
        return (
            <Switch>
                <Route exact path="/" >
                    <All />
                </Route>
                <Route exact path="/all" >
                    <All />
                </Route>
                <Route path="/socialinnovation" >
                    <SocialInnovation />
                </Route>
            </Switch>
        )
    }
}

export default Main;