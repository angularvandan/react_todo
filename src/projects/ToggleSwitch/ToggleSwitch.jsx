import { useState } from "react";
import { MdOutlineRadioButtonChecked } from "react-icons/md";

import "./ToggleSwitch.css"
export const ToggleSwitch=()=>{

    const [isOn,setIsOn]=useState(false);
    const handleSwitchToggle=()=>{
        setIsOn(!isOn);
    }
    const isOnToggle=isOn?'on':'off';
    return (
        < >
        <h1 className="flex justify-center items-center">Button Toggle 
            <MdOutlineRadioButtonChecked className="text-green-700"/></h1>
        <div className={`toggle-switch w-[200px] h-[80px]  rounded-[50px] flex items-center px-1 ${isOn?'bg-green-600':'bg-gray-500'}`} onClick={handleSwitchToggle}>
            <div className={`switch rounded-full bg-gray-700 w-[70px] h-[70px] flex justify-center items-center transition duration-300 ease-in-out ${isOnToggle}`}>
                <span className={`switch-state text-white`}>
                    {isOn?'On':'Off'}
                </span>
            </div>
        </div></>
    );
}