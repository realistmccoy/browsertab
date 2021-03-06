import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import './App.css';


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
