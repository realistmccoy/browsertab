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
         <Tab></Tab>
					</div>
					<div className='viewport'>pages Go here</div>
				</div>
			</div>
    <Route path='/'>
    <Home />
    </Route>

		</Router>
	);
}

export default App;
