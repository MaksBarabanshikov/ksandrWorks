import {useEffect, useState} from "react";
import {getPadTime} from "../../../../Utils/helpers/GetPadTime";

const Timer = () => {
    const [timeLeft, setTimeLeft] = useState(15 * 60 )
    const [isEnd, setIsEnd] = useState(false)

    const minutes = getPadTime(Math.floor(timeLeft / 60))
    const seconds = getPadTime(Math.floor(timeLeft % 60))

    useEffect(() => {
        const interval = setInterval(() =>
        {
            !isEnd &&
            setTimeLeft(timeLeft => timeLeft >= 1 ? timeLeft - 1 : setIsEnd(true))
        }, 1000)

        if (isEnd) {
            clearInterval(interval)
        }

        return () => clearInterval(interval)
    }, [isEnd])

    return (
        <div className="landing-speed__timer">
            {!isEnd &&
                <>
                    <span className='landing-speed__timer_min'>{minutes}:</span>
                    <span className="landing-speed__timer_sec">{seconds}</span>
                </>
            }
            {isEnd &&
                <>
                    <span className='landing-speed__timer_end'>Извините вы не успели(</span>
                </>
            }
        </div>
    )
}

export default Timer
