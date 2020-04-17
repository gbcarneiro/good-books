import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import { LastLocationProvider } from 'react-router-last-location';

import Logon from './pages/Logon'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import SendBook from './pages/SendBook'
import About from './pages/About'


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <LastLocationProvider>
                    <Route path="/" exact component={Logon}/>
                    <Route path="/register" component={Register} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/send" component={SendBook} />
                    <Route path="/about" component={About} />
                </LastLocationProvider>
            </Switch>
        </BrowserRouter>
    )
}