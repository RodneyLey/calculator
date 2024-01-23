import Buttons from "./Buttons.jsx";
import DisplayArea from "./DisplayArea.jsx";
import {useState} from "react";
import './App.css'

function App() {
  const [result, setResult] = useState(" ")

  const display = (text) => {
    setResult(prev => prev + text)
  }

  return (
    <>
      <DisplayArea text={result}/>
      <Buttons display={display}/>

    </>
  )
}

export default App
