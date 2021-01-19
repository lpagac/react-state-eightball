import EightBall from "./EightBall";
import './App.css';

/** App
 * 
 * props: 
 *  - answers (array of objects with msg: string, color: backgroundColor for eightball)
 * 
 * state: null
 * 
 * App -> EightBall
 */

function App() {
  return (
    <div className="App">
      <EightBall />
    </div>
  );
}


export default App;
