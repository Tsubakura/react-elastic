import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import databases from './components/databases'

class App extends Component {
    state = {  }
    render() { 
        return (
            <Router>
            <div>
                <h1>Elastic Net</h1>
                <nav>
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/databases">Databases</Link>
                    </li>
                </ul>
                </nav>
                <Route path="/databases" component={ databases } /> 
            </div>
            </Router>
        )
    }
}

export default App;
