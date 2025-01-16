import Dialog from './Dialog.jsx';
import { useState, useRef } from 'react';
export default function GameCard({children, seconds}){
    
    const [timerIsRunning, setTimerIsRunning] = useState(false)
    const [timeRemaning, setTimeRemaning]= useState(seconds*1000)
    const time = useRef()
    const dialog = useRef()
    
if(timeRemaning<=0){
        clearInterval(time.current)
        dialog.current.open()
    }

function handleReset(){
    setTimeRemaning(seconds*1000)
}

function handleStartTimer(){
        setTimerIsRunning(true);
        time.current = setInterval(()=>{
            setTimeRemaning(preTime=>preTime-10)
        }, 10)
    }

function handleStopTimer(){
        setTimerIsRunning(false)
        clearInterval(time.current)
        dialog.current.open()
    }


    return(
    <>
        <Dialog seconds={seconds} timeRemaning={timeRemaning} ref={dialog} onReset={handleReset}/>
        <div className="challenge">
            <h2>{children}</h2>
            <p className="challenge-time">{seconds} {seconds>1?"seconds":"second"}</p>
            <button onClick={timerIsRunning?handleStopTimer:handleStartTimer}>{timerIsRunning?"stop":"start"} challenge</button>
            <p>Timer {timerIsRunning?"is running...":"inactive"}</p>
        </div>
    
    </>
    )
}