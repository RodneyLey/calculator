import "./Button.css"
import {useEffect, useState} from "react";

function Button({text, onClick}) {

  const [message, setMessage] = useState("Hello");

  const buttonClick = () => {
    setMessage("Clicked!")
    onClick(text);
  }

  useEffect(() => {
    const t = setInterval(() => {
      setMessage("");
    }, 1000);
    return () => clearInterval(t)
  }, [message]);

  return (
    <div className={"myButton"}>
      <h1>{message}</h1>
      <button onClick={buttonClick}>{text}</button>
    </div>
  )
}

export default Button