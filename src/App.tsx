import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Resume from './pages/Resume'

const App = () => {
  // basename="/portfolio"
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/resume">
          <Resume />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
