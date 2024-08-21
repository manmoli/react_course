/* 

* Class Component: Welcome is a class component that takes props of type WelcomeProps and manages state of type WelcomeState.
* State Management: State is managed using this.state and initialized in the constructor.

*/

import React from "react";

interface Props {
    name: string
}

interface State {
    greeting: string
}

export class ClassComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            greeting: `Hello, ${props.name}`
        }
    }

    render() {
        return <h1>{this.state.greeting}</h1>
    }
}