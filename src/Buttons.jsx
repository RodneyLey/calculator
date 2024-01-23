import Button from "./Button.jsx";
import "./Buttons.css";

function Buttons({display}) {
  return (
    <div className={"allButtons"}>
      <Button text={"7"} onClick={display}/>
      <Button text={"8"} onClick={display}/>
      <Button text={"9"} onClick={display}/>
      <Button text={"*"} onClick={display}/>
      <Button text={"4"} onClick={display}/>
      <Button text={"5"} onClick={display}/>
      <Button text={"6"} onClick={display}/>
      <Button text={"-"} onClick={display}/>
      <Button text={"1"} onClick={display}/>
      <Button text={"2"} onClick={display}/>
      <Button text={"3"} onClick={display}/>
      <Button text={"+"} onClick={display}/>
      <Button text={"C"} onClick={display}/>
      <Button text={"0"} onClick={display}/>
      <Button text={"."} onClick={display}/>
      <Button text={"="} onClick={display}/>
    </div>

  );
}

export default Buttons