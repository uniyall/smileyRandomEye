import PropTypes from 'prop-types';

function FaceBg({r, sw}) {
  return (
    <circle r={r} fill="yellow" stroke="black" strokeWidth={sw}></circle>
  )
}

FaceBg.propTypes = 
{
    r : PropTypes.number,
    sw : PropTypes.number
};


export default FaceBg