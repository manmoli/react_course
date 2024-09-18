import { useEffect, useRef } from "react"

export function usePrevious(value: any) {
    const prevValue = useRef<string>()
    useEffect(() => {
        prevValue.current = value
    }, [value])

    return prevValue.current
}