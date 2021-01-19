import { useState } from "react";

/** EightBall
 * 
 * props: 
 *  - answers: (array of objects)
 *   [{msg: string of message text, color: backgroundColor for ball},...]
 *  
 * state: 
 * - backgroundColor: current backgroundColor of eightball
 * - message: current message text of eightball
 * 
 * App -> EightBall
 */

function EightBall({answers}) {
  const [backgroundColor, setBackgroundColor] = useState("black");
  const [message, setMessage] = useState("Think of a Question");

  const styles = {
    borderRadius: "50%",
    backgroundColor,
    color: "white",
    textAlign: "center",
  };

  function handleClick() {
    const index = Math.floor(Math.random() * answers.length);
    const color = answers[index].color;
    const msg = answers[index].msg;
    setBackgroundColor(color);
    setMessage(msg);
  }

  return (
    <div onClick={handleClick} className="EightBall" style={styles}>
      <p className='EightBall-message'>{message}</p>
    </div>
  )
}


export default EightBall;

