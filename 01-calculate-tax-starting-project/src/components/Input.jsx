import { useState } from "react"

export default function Input ({children, onChangeInput, type, inputValues}){
    
return (
    <p>
        <label>{children}</label>
        <input type="number" required value={inputValues[type]} onChange={(e)=>onChangeInput(type, e.target.value)}/>
   </p>
)
}