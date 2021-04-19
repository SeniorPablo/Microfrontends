import React, { Fragment } from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

import Signin from './components/Signin'
import Signup from './components/Signup'

const generateClassName = createGenerateClassName({
    productionPrefix: 'au'
})

export default function App({ history, onSignIn }) {
    return (
        <Fragment>
            <StylesProvider generateClassName={generateClassName}>
                <Router history={history}>
                    <Switch>
                        <Route path="/authentication/signin/">
                            <Signin onSignIn={onSignIn} />
                        </Route>
                        <Route path="/authentication/signup/">
                            <Signup onSignIn={onSignIn} />
                        </Route>
                    </Switch>
                </Router>
            </StylesProvider>
        </Fragment>
    )
}
