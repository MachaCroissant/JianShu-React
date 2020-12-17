import React from 'react'
// import {Provider} from 'react-redux'
// import { BrowserRouter, Route } from 'react-router-dom'

import {Login} from './features/login'
import {Detail} from './features/detail'
import {Home} from './features/home'
import {HeadBar} from './utils/header'

// import {Write} from './features/write'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from 'react-router-dom'


function App(){
        return(
            <Router>
            <div>
            <Switch>
                <Route 
                exact 
                path="/" 
                render={() => (
                    <React.Fragment>
                        <HeadBar />
                        <Home />
                    </React.Fragment>
                )}/>
                <Route exact path="/detail/:id" component={Detail} />
                <Route exact path="/login" component={Login} />
                <Redirect to="/" />
            </Switch>
            </div>
            </Router>
        )
}


export default App