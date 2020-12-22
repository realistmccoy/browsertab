import React from 'react'
import {Switch}

function Routes() {
  return (
    <div>
       <Switch>
          
          <Route path='/about'>
          <About />
          </Route>
          <Route path='/contact'>
          <Contact />
          </Route>
          <Route path='/' exact={true}>
          <Home />
          </Route>
          </Switch>
    </div>
  )
}

export default Routes
