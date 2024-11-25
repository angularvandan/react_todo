import { useState } from "react"

export const LiftingStateUp=()=>{
    const [inputValue,setInputValue]=useState("");

    return <>
        <InputComponent inputValue={inputValue} setInputValue={setInputValue}/>
        <DisplayComponent inputValue={inputValue}/>
    </>
}
function InputComponent({inputValue,setInputValue}){
    return (
        <>
            <input type="text"placeholder="Enter Your Name"value={inputValue} onChange={(e)=> setInputValue(e.target.value)} />
        </>
    );
}
function DisplayComponent({inputValue}){
    return (<>
        <p>Current input element is :{inputValue}</p>
    </>);
}