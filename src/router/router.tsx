import React from 'react'
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom'
import Form from '../components/form'
import { Profile } from '../page'

const ComponentRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/profile">
                    <Profile />
                </Route>
                <Route path="/:slug" exact>
                    <Form />
                </Route>
                <Route path="/" exact>
                    <Redirect from="/" to="/login" />
                </Route>
                {/* <Route>
               <PageError />
            </Route>
            <Route component={PageError} /> */}
            </Switch>
        </Router>
    )
}

export default ComponentRouter
