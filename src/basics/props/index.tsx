/* 

* Props: UserCardProps defines the types for username and age props.
* Prop Usage: UserCard component uses the props to render user details.

*/


import React from "react";
import { ChildComponentWithProps } from "./component_with_props";


export const ParentComponentForChildWithProps: React.FC = () => {
    return <>
        <h1>I'm the father</h1>
        <p>this is my child...</p>
        <ChildComponentWithProps name='child' birthDate={new Date()}></ChildComponentWithProps>
    </>
}
