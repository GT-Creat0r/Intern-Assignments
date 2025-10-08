import { useState } from "react";

const LiftingState = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <InputComponent inputValue={inputValue} setInputValue={setInputValue}/>
      <DisplayComponent inputValue={inputValue}/>
    </>
  );
};

export default LiftingState;

const InputComponent = ({inputValue,setInputValue}) => {
  return (
    <>
      <input type="text" placeholder="Enter Something" value={inputValue} onChange={(e)=> setInputValue(e.target.value)} />
    </> 
  );
};

const DisplayComponent = ({inputValue}) => {
  return (
    <>
      <p>The current Input value is:{inputValue}</p>
    </>
  )
};
