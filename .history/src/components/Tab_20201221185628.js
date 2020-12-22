import React from 'react'

export default function Tab({children}) {

  
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

  return (
    <div
    className='tab'
    onMouseOut={hideHighlight}
    onMouseMove={moveHighlight}
  >
    <div className='highlight' style={highlightStyle} />
    {children}
  </div>
  )
}