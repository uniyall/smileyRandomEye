import Face from "./components/Face";
import { range } from 'd3'

const width = 166;
const height = 166  ;
const sw = 5;

const arr = range((9*4));

function App() {
  return (
    <>
    {arr.map((val, ind) => (
      <Face key={ind} width={width} height={height} cx={Math.floor(width/2)} cy={Math.floor(height/2)} r={height/2 - sw} sw={sw} xoffset="30" yoffset="30" sr={Math.random()*20}/>
    ))} 
    </>
  )
}

export default App
