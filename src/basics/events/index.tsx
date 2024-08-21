
/* 

Event Handling: ClickButton component takes an onClick prop, which is a function.
Handling Events: The parent component passes handleClick function to the ClickButton component, which is called when the button is clicked.

*/


import React from "react";
import { ChildWithClickEvent } from "./child_with_event";

export const ComponentWithChainedEvents: React.FC = () => {

    const handleClickEvent = () => {
        alert('Button clicked!')
    }

    return <>
        <h1>Parent that waits child event</h1>
        <ChildWithClickEvent onClickHandler={handleClickEvent}></ChildWithClickEvent>
    </>
}