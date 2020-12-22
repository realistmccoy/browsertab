import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link}
import Tab from './components/Tab';
import './App.css';

function App() {
	return (
		<div className='app'>
			<div className='browser'>
				<div className='tabs'>
					<Tab>
						<a>Home</a>
					</Tab>
					<Tab>
						<a>About</a>
					</Tab>
					<Tab>
						<a>Contact</a>
					</Tab>
				</div>
				<div className='viewport'>pages Go here</div>
			</div>
		</div>
	);
}

export default App;
