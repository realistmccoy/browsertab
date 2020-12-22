import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import
import './App.css';


function App() {
	return (
		<Router>
			<div className='app'>
				<div className='browser'>
					<Header/>
       
            
					
					<div className='viewport'>
           <Routes/>
          </div>
				</div>
			</div>


		</Router>
	);
}

export default App;
