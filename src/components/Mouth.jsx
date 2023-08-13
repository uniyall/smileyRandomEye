import { arc } from 'd3';
import PropTypes from 'prop-types';

const mouthArc = arc()
  .innerRadius(55)
  .outerRadius(60)
  .startAngle(Math.PI/2)
  .endAngle(Math.PI * 1.5)


function Mouth() {
  return (
    <path d={mouthArc()}/>
  )
}

Mouth.propTypes = 
{
    r : PropTypes.number,
    sw : PropTypes.number
};



export default Mouth