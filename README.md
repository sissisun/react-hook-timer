### react-hook-timer
use this you can have a easy timer

#### Install
```javascript
npm install react-hook-timer --save
or
yarn add react-hook-timer
```

#### Usage
```javascript
import useTimeClock from 'react-hook-timer'

function PackTimeClock({startTime = 0}) {
    const localTime = useTimeClock(2 * 1000)
    const time = localTime - startTime
    const caluBase = 60 * 1000
    const minutes = Math.floor(time / caluBase)
    const seconds = Math.floor((time - minutes * caluBase) / 1000)
    const timeText = minutes < 1 ? `${seconds}秒` : minutes < 10 ? `${minutes}分钟${seconds}秒` : `${minutes}分钟`

    return <span className="pick-header-pack-time">from begining {timeText}</span>
}
```