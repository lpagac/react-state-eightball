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

  // Docstring
  function handleClick() {
    const index = Math.floor(Math.random() * answers.length);
    // Destructure
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

const ANSWERS = [
  { msg: "It is certain.", color: "green" },
  { msg: "It is decidedly so.", color: "green" },
  { msg: "Without a doubt.", color: "green" },
  { msg: "Yes - definitely.", color: "green" },
  { msg: "You may rely on it.", color: "green" },
  { msg: "As I see it, yes.", color: "green" },
  { msg: "Most likely.", color: "green" },
  { msg: "Outlook good.", color: "green" },
  { msg: "Yes.", color: "green" },
  { msg: "Signs point to yes.", color: "goldenrod" },
  { msg: "Reply hazy, try again.", color: "goldenrod" },
  { msg: "Ask again later.", color: "goldenrod" },
  { msg: "Better not tell you now.", color: "goldenrod" },
  { msg: "Cannot predict now.", color: "goldenrod" },
  { msg: "Concentrate and ask again.", color: "goldenrod" },
  { msg: "Don't count on it.", color: "red" },
  { msg: "My reply is no.", color: "red" },
  { msg: "My sources say no.", color: "red" },
  { msg: "Outlook not so good.", color: "red" },
  { msg: "Very doubtful.", color: "red" },
];

EightBall.defaultProps = {
  answers: ANSWERS
};


export default EightBall;

