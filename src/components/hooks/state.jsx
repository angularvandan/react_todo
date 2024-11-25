import { useState } from "react";

export const State = () => {
    let value = 0;
    // function handleButtonClick(){
    //     value+=1;
    //     console.log(value);
    // }

    //useState will retrun array who contain value and fxn so i have destructure
    const [count, setCount] = useState(0);
    function handleButtonClick() {
        setCount(() => count + 1);
    }
    return (<>
        <div>
            <h1 className="text-center">{count}</h1>
            <button onClick={handleButtonClick}>Increment</button>
        </div>
        <ChildComponent/>
    </>);
}

function ChildComponent(){
    console.log('child component');
    return (<>
        <div>Child Component</div>
    </>);
}