import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../pages/home'
import About from '../pages/about'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './transitions.css'
import PrivateRoute from './privateRoute'

const Routes = () =>
  <BrowserRouter>
    <Route render={({ location }) => (
      <TransitionGroup>
        <CSSTransition timeout={500} classNames='fade' key={location.key}>
          <Switch location={location}>
            <Route exact path='/' component={Home} />
            <PrivateRoute path='/About' component={About} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )} />
  </BrowserRouter>

export default Routes