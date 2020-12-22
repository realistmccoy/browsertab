import React, { useState } from 'react';
import './App.css';

function Tab() {

  
  return (
    <div
    className='tab'
    onMouseOut={hideHighlight}
    onMouseMove={moveHighlight}
  >
    <div className='highlight' style={highlightStyle} />
    <a>Home</a>
  </div>
  )
}

function App() {
	const [highlightStyle, setHighlightStyle] = useState({
		left: 0,
		opacity: 0,
	});
	function moveHighlight(e) {
		//update highlight
		setHighlightStyle({
			left: e.nativeEvent.layerX,
		});
	}

	function hideHighlight(e) {
		setHighlightStyle({
			opacity: 0,
			left: e.nativeEvent.layerX,
		});
	}

	return (
		<div className='app'>
			<div className='browser'>
				<div className='tabs'>
					<div
						className='tab'
						onMouseOut={hideHighlight}
						onMouseMove={moveHighlight}
					>
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
