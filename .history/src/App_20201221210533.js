import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import Tab from './components/Tab';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import './App.css';
import Header from './components/Header';

function App() {
	return (
		<Router>
			<div className='app'>
				<div className='browser'>
					<Header/>
       
            
					
					<div className='viewport'>
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
				</div>
			</div>


		</Router>
	);
}

export default App;
