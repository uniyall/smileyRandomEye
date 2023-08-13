import PropTypes from 'prop-types';

function Eye({xoffset, yoffset, sr}) {
  return (
    <>
    <circle cx={-xoffset} cy={yoffset} r={sr}></circle>
    
    
    </>
  )
}

Eye.propTypes = 
{
    xoffset : PropTypes.number,
    yoffset : PropTypes.number,
    sr : PropTypes.number
};

export default Eye