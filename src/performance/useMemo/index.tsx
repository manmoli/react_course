import { useMemo, useState } from "react";
import { MyButton } from "./my_button";


export function UseMemoExample() {
    const [num, setNum] = useState(1)
    const [logValue, setLogValue] = useState('')
    const fibValue = useMemo(() => {
        console.log('calculating fib value')
        return fib(num)
    }, [num])

    return <>
        <h1>UseMemo</h1>
        <p>In this example, if we change logValue, for example, the component will re-render. If we have a function to be executed in the code html like <br></br>
            <pre>
                <code>
                    {`
                    <h1>Fib {num} is {fib(num)}</h1>
                    `}
                </code>
            </pre>
            <br />

            it will recalculate the fib function every time. <br />
            If we use useMemo instead, like <br />
            <pre>
                <code>
                    {`
                    const fibValue = useMemo(() => {
                        console.log('calculating fib value')
                        return fib(num)
                    }, [num])
                    `}
                </code>
            </pre>
            and
            <pre>
                <code>
                    {`
                    <h1>Fib {num} is {fibValue}</h1>
                    `}
                </code>
            </pre>
            it will only recalculate the fib function if the num state variable changes. <br /><br />
            Open the console and see how it works
        </p>
        <h1>Fib {num} is {fibValue}</h1>

        <input type="number" value={num} onChange={(event) => setNum(+event.target.value)} />

        <input type="text" value={logValue} onChange={event => setLogValue(event.target.value)} />

        <MyButton onClick={() => console.log(logValue)}>Log Value</MyButton>
    </>
}

function fib(n: number): number {
    if (n === 2) return 1
    if (n === 1) return 0
    return fib(n - 1) + fib(n - 1)
}