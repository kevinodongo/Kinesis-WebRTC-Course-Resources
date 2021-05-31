import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LayoutComponent from '../pages/LayoutComponent'
import LoginComponent from '../pages/LoginComponent'
import SignupComponent from '../pages/SignupComponent'
import ProtectedComponent from './ProtectedComponent'

function RoutesComponent() {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={LoginComponent}></Route>
                <Route path="/register" exact component={SignupComponent}></Route>
                <ProtectedComponent exact path="/:id" component={LayoutComponent} />
            </Switch>
        </div>
    )
}

export default RoutesComponent
