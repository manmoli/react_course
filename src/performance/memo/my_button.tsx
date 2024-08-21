import React from "react";

interface Props {
    propValue: string
}

export default React.memo(function ChildComponent ({propValue}: Props) {
    console.log('rendering my button')
    return <h1>This is the prop from the parent: {propValue}</h1>
})
