import Button from "./Button.jsx";
import "./Buttons.css";

function Buttons({onClick}) {
  return (
    <div className={"allButtons"}>
      <Button text={"7"}
              onClick={(text) => onClick(text, "text")}/>
      <Button text={"8"}
              onClick={(text) => onClick(text, "text")}/>
      <Button text={"9"}
              onClick={(text) => onClick(text, "text")}/>
      <Button text={"*"}
              onClick={() => onClick("*", "multiply")}/>
      <Button text={"4"}
              onClick={(text) => onClick(text, "text")}/>
      <Button text={"5"}
              onClick={(text) => onClick(text, "text")}/>
      <Button text={"6"}
              onClick={(text) => onClick(text, "text")}/>
      <Button text={"-"}
              onClick={() => onClick("-", "subtract")}/>
      <Button text={"1"}
              onClick={(text) => onClick(text, "text")}/>
      <Button text={"2"}
              onClick={(text) => onClick(text, "text")}/>
      <Button text={"3"}
              onClick={(text) => onClick(text, "text")}/>
      <Button text={"+"}
              onClick={() => onClick("+", "add")}/>
      <Button text={"C"}
              onClick={() => onClick("", "clear")}/>
      <Button text={"0"}
              onClick={(text) => onClick(text, "text")}/>
      <Button text={"."}
              onClick={(text) => onClick(text, "text")}/>
      <Button text={"="}
              onClick={() => onClick("=", "equal")}/>
    </div>

  );
}

export default Buttons