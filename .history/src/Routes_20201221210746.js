import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'


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
