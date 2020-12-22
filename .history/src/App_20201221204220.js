import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Tab from './components/Tab';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import './App.css';

function App() {
	return (
		<Router>
			<div className='app'>
				<div className='browser'>
					<div className='tabs'>
            <Tab> 
            <Link to='/'>Home</Link>
            </Tab>
            
					</div>
					<div className='viewport'>
            <Switch>
          
          <Route path='/about'>
          <About />
          </Route>
          <Route path='/Contact'>
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
