import React from "react";

interface Props {
    name: string
    birthDate: Date
}

export const ChildComponentWithProps: React.FC<Props> = ({ name, birthDate }) => {
    return <>
        <h1>I'm a child component with props</h1>
        <p>my name is {name}</p>
        <p>my age is {birthDate.toISOString()}</p>
    </>
}