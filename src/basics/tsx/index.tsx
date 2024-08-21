/* 

* JSX/TSX: JSX is a syntax extension that allows writing HTML elements in JavaScript. When using TypeScript, files are typically named .tsx to indicate TypeScript + JSX. 
* Functional Component: Greeting is a functional component that takes props of type GreetingProps and renders a greeting message.
* Props: GreetingProps interface defines the type of props the component expects (name as a string).

 
*/


import React from "react"

interface Props {
    name: string
}

export const BasicReactComponent: React.FC<Props> = ({ name }) => {
    return <h1>I'm a basic component {name}</h1>
}