import { useImperativeHandle, useRef } from "react"
export default function Dialog({seconds, timeRemaning, onReset, ref}){

const dialog = useRef()
const timeFormatted = (timeRemaning/1000).toFixed(2);
const score = Math.round((1-timeRemaning/(seconds*1000))*100)

useImperativeHandle(ref, ()=>{
        return {
            open(){
                dialog.current.showModal()
            }
        }
    })
    
    return(
        <dialog className="result-modal" ref={dialog} onClose={onReset}>
            <h2>{timeRemaning<=0?"You lost": `Your score: ${score}`}</h2>
            <p>The target time was <strong className="progress">{seconds} {seconds>1?"seconds":"second"}</strong></p>
            <p>you stopped the timer with <strong className="progress">{timeFormatted} seconds left</strong></p>
            <form action="dialog" >
                <button>close</button>
            </form>
        </dialog>
    )
}