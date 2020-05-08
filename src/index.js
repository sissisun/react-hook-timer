import {useState, useEffect} from 'react'

function useTimeClock(ticktime=1000) {
    const [localTime, setLocalTime] = useState(new Date().getTime())

    let timer
    useEffect(() => {
        timer = setTimeout(() => {
            setLocalTime(new Date().getTime())
        }, ticktime)

        return () => {
            clearTimeout(timer)
        }
    })

    return localTime
}

export default useTimeClock