import { formatter } from "../util/investment"
export default function Table ({dataArray}){
    const initialInvestment = dataArray[0].valueEndOfYear - dataArray[0].interest - dataArray[0].annualInvestment
    return (
        <>
        <thead>
            <tr>

            <th>Year</th>
            <th>Investment value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested captal</th>
            </tr>
        </thead>
        <tbody>
            {dataArray.map((row)=>{

                const totalInterest = row.valueEndOfYear - row.annualInvestment * row.year - initialInvestment;
                const totalAmountInvested = row.valueEndOfYear - totalInterest;
                return (<tr key={row.year}>
                    <td>{row.year}</td>
                    <td>{formatter.format(row.valueEndOfYear)}</td>
                    <td>{formatter.format(row.interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(totalAmountInvested)}</td>
                </tr>)
            })}
        </tbody>
        </>
    )
}