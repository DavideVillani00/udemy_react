import Input from "./components/Input.jsx"
import Table from "./components/Table.jsx"
import { calculateInvestmentResults } from "./util/investment.js"
import { useState } from "react"

// const INITIAL_VALUES = {inInv: 0, anInv: 0, exRe: 0, dura: 0}

export default function App() {
const [inputValues, setInputValues] = useState({inInv: 10000, anInv: 12000, exRe: 6, dura: 10})


function handleChangeInputValues (input, value){
  setInputValues(preArr=>{return { ...preArr, [input]: Number(value)}})
}
const data = calculateInvestmentResults(inputValues)
let isValid = inputValues.dura>0
  return (
    <main>
      <div id="user-input">
        <div className="input-group">
          <Input inputValues= {inputValues} type="inInv" onChangeInput={handleChangeInputValues}>initial Investiment</Input>
          <Input inputValues= {inputValues} type="anInv" onChangeInput={handleChangeInputValues}>annual Investiment</Input>
        </div>
        <div className="input-group">
          <Input inputValues= {inputValues} type="exRe" onChangeInput={handleChangeInputValues}>expected Return</Input>
          <Input inputValues= {inputValues} type="dura" onChangeInput={handleChangeInputValues}>duration</Input>
         </div>
    </div>
    {!isValid&&<p className="center">plese enter a value of duration gretaer of 0</p>}
    {isValid&&<table id="result">
    <Table dataArray={data}/>
    </table>}
    </main>
    

  )
}


