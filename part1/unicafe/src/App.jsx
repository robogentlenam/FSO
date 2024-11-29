/* eslint-disable no-const-assign */
import { useState } from 'react'




const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)


const handleGoodClick = () => {
  const updatedGood = good + 1
  setGood(updatedGood)
  const updatedTotal = updatedGood + neutral + bad
  setTotal(updatedTotal)
  const sumByWeight = updatedGood * 1 + neutral * 0 + (bad * -1)
  console.log(sumByWeight)
  const calculateAverage = sumByWeight/updatedTotal
  setAverage(calculateAverage)
  const calculatePositive =  (updatedGood / updatedTotal)*100
  setPositive(calculatePositive)
}

const handleNeutralClick = () => {
  const updatedNeutral = neutral + 1
  setNeutral(updatedNeutral)
  const updatedTotal = good + updatedNeutral + bad
  setTotal(updatedTotal)
  const sumByWeight = good * 1 + updatedNeutral * 0 + (bad * -1)
  console.log(sumByWeight)
  const calculateAverage = sumByWeight/updatedTotal
  setAverage(calculateAverage)
  const calculatePositive =  (good / updatedTotal)*100
  setPositive(calculatePositive)
}


const handleBadClick = () => {
  const updatedBad = bad + 1
  setBad(updatedBad)
  const updatedTotal = good + neutral + updatedBad
  setTotal(updatedTotal)
  const sumByWeight = good * 1 + neutral * 0 + (updatedBad * -1)
  console.log(sumByWeight)
  const calculateAverage = sumByWeight/updatedTotal
  setAverage(calculateAverage)
  const calculatePositive =  (good / updatedTotal)*100
  setPositive(calculatePositive)
}



  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={handleGoodClick}>Good</button>
      <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handleBadClick}>Bad</button>
      <h1>Statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>Total {total}</p>
      <p>Average {average}</p>
      <p>Positive {positive} %</p>
    </div>
  )
}

export default App