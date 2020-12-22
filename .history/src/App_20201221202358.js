import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Tab from './components/Tab';
import Home from './pages/Home'
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
          <Route path='/'>
          <Home />
          </Route>
          <Route path='/'>
          <Home />
          </Route>
          </div>
				</div>
			</div>


		</Router>
	);
}

export default App;
