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
  const [countRed, setCountRed] = useState(0);
  const [countGreen, setCountGreen] = useState(0);
  const [countGoldenRod, setCountGoldenRod] = useState(0);


  const styles = {
    borderRadius: "50%",
    backgroundColor,
    color: "white",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    width: "300px",
    height: "300px",
  };

  // Docstring
  function handleClick() {
    const index = Math.floor(Math.random() * answers.length);
    // Destructure
    const {color, msg} = answers[index];
    setBackgroundColor(color);
    setMessage(msg);

    setColorCounts();
  }
  
  /* Event handler function for reset button click.
  Resets the eightball to default 
  - backGroundColor: black, message: "Think of a Question" */
  function handleResetClick() {
    setBackgroundColor("black");
    setMessage("Think of a Question");
    setColorCounts();
  }

  /* Helper function to increase color counts.*/  
  function setColorCounts() {
    if (backgroundColor === "green") {
      setCountRed(countRed);
      setCountGreen(countGreen + 1);
      setCountGoldenRod(countGoldenRod);
    } else if (backgroundColor === "red") {
      setCountRed(countRed + 1);
      setCountGreen(countGreen);
      setCountGoldenRod(countGoldenRod);
    } else if (backgroundColor === "goldenrod") {
      setCountRed(countRed);
      setCountGreen(countGreen);
      setCountGoldenRod(countGoldenRod + 1);
    } else {
      setCountRed(countRed);
      setCountGreen(countGreen);
      setCountGoldenRod(countGoldenRod);
    }
  }

  return (
    <div className="EightBall" style={styles}> 
      <p className="EightBall-counts">Green: {countGreen}, Red: {countRed}, GoldenRod: {countGoldenRod} </p>
      <div onClick={handleClick} className="Eightball-display" >
        <p className='EightBall-message'>{message}</p>
      </div>
      <button className="Eightball-reset" onClick={handleResetClick}>Reset</button>
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

