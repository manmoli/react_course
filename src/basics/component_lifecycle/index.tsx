import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ComponentFunctional } from "./component"


export function ComponentLifeCycleExampleFunctional() {
    const navigate = useNavigate()
    const [show, setShow] = useState(false)

    return <>
        <a onClick={() => navigate(-1)} >go back</a>
        <h1>This is a functional component</h1>
        <button onClick={() => setShow(!show)}>show</button>

        {show &&
            <ComponentFunctional></ComponentFunctional>}
    </>
}