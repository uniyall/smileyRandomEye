import PropTypes from 'prop-types';


function FaceContainer({ children, width, height, cx, cy }) {
  return (
    <>
    <svg width={width} height={height}>
    <g transform={`translate(${cx}, ${cy})`}>
        {children}
    </g>
    </svg>
    </>

  )
}

FaceContainer.propTypes = 
{
    children : PropTypes.node, 
    width : PropTypes.number, 
    height : PropTypes.number, 
    cx : PropTypes.number, 
    cy : PropTypes.number
    
};

export default FaceContainer