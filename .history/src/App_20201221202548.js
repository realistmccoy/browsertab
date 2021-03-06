import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Tab from './components/Tab';
import Home from './pages/Home'
import About from './pages/About'
import  from './pages/'
import './App.css';

function App() {
	return (
		<Router>
			<div className='app'>
				<div className='browser'>
					<div className='tabs'>
         <Tab> <a>Home</a></Tab>
					</div>
					<div className='viewport'>
          <Route path='/'>
          <Home />
          </Route>
          <Route path='/about'>
          <About />
          </Route>
          <Route path='/Contact'>
          <Contact />
          </Route>
          </div>
				</div>
			</div>


		</Router>
	);
}

export default App;
