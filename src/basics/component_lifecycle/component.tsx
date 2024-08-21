import { useEffect, useState } from "react"

export function ComponentFunctional() {
    const [counter, setCounter] = useState<number>(0)

    useEffect(() => {
        console.log('counter: ', counter)
    }, [counter])
    
    useEffect(() => {
        console.log('mounting')
        return () => console.log(`Unmounting`)
    },[])

    return <>
        <p>Open the console</p>
        <p>counter: {counter}</p>
        <button onClick={() => setCounter(counter + 1)}>Increase</button>
    </>
}
