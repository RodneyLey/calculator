import Buttons from "./Buttons.jsx";
import DisplayArea from "./DisplayArea.jsx";
import {useState} from "react";
import './App.css'

function App() {
  const [result, setResult] = useState("")
  const [memory, setMemory] = useState(0.0)
  const [operator, setOperator] = useState("")


  const buttonClick = (text, operation) => {
    if (operation === "clear") {
      setResult("");
    } else if (operation === "multiply") {
      setMemory(parseFloat(result));
      setResult("");
      setOperator("*")
    } else if (operation === "divide") {
      setMemory(parseFloat(result))
      setResult("");
      setOperator("/")
    } else if (operation === "add") {
      setMemory(parseFloat(result));
      setResult("");
      setOperator("+")
    } else if (operation === "subtract") {
      setMemory(parseFloat(result));
      setResult("");
      setOperator("-")
    } else if (operation === "equal") {
      const operand = parseFloat(result)
      if (operator === "+") {
        setResult((memory + operand).toFixed(2));
      } else if (operator === "-") {
        setResult((memory - operand).toFixed(2));
      } else if (operator === "*") {
        setResult((memory * operand).toFixed(2));
      }
    } else {
      setResult(prev => prev + text)
    }
  }

  return (
    <>
      
      <DisplayArea text={result}/>
      <Buttons onClick={buttonClick}/>

    </>
  )
}

export default App
