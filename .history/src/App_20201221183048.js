import React, { useState } from 'react';
import './App.css';

function App() {
	const [highlightStyle, setHighlightStyle] = useState({
		left: 0,
  });
  function moveHighlight(e) {
    
  }

	return (
		<div className='app'>
			<div className='browser'>
				<div className='tabs'>
					<div className='tab' onMouseMove={moveHighlight} >
						<div className='highlight' style={highlightStyle} />
						<a>Home</a>
					</div>
					<div className='tab'>
						<a>About</a>
					</div>
					<div className='tab'>
						<a>Features</a>
					</div>
				</div>

				<div className='viewport'>Pages Go Here</div>
			</div>
		</div>
	);
}

export default App;
