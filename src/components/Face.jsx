import PropTypes from 'prop-types';
import Eye from './Eye';
import FaceBg from './FaceBg'; 
import Mouth from './Mouth';
import FaceContainer from './FaceContainer';

function Face({width, height, cx, cy, r, sw, xoffset, yoffset, sr}) {
  return (
    <FaceContainer width={width} height={height} cx={cx} cy={cy}>
    <FaceBg r={r} sw={sw}/>
    <Eye xoffset={-xoffset} yoffset={-yoffset} sr={sr}/>
    <Eye xoffset={xoffset} yoffset={-yoffset} sr={sr}/>
    <Mouth/>
  </FaceContainer>
  )
}

Face.propTypes = 
{
    width: PropTypes.number,
    height: PropTypes.number,
    cx: PropTypes.number,
    cy: PropTypes.number,
    r: PropTypes.number,
    sw: PropTypes.number,
    xoffset: PropTypes.number,
    yoffset: PropTypes.number,
    sr: PropTypes.number
};

export default Face