/* eslint-disable react/prop-types */
/* eslint-disable no-const-assign */
import { useState } from "react";

const Statistics = (props) => {
  if (props.total >= 1) {
    return (
      <div>
        <table>
          <tbody>
            <StatisticLine text="good" value={props.good} />
            <StatisticLine text="bad" value={props.bad} />
            <StatisticLine text="neutral" value={props.neutral} />
            <StatisticLine text="Total" value={props.total} />
            <StatisticLine text="Average" value={props.average} />
            <StatisticLine text="Positive" value={`${props.positive} %`} />
          </tbody>
        </table>
      </div>
    );
  }
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  const handleGoodClick = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
    const updatedTotal = updatedGood + neutral + bad;
    setTotal(updatedTotal);
    const sumByWeight = updatedGood * 1 + neutral * 0 + bad * -1;
    console.log(sumByWeight);
    const calculateAverage = sumByWeight / updatedTotal;
    setAverage(calculateAverage);
    const calculatePositive = (updatedGood / updatedTotal) * 100;
    setPositive(calculatePositive);
  };

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
    const updatedTotal = good + updatedNeutral + bad;
    setTotal(updatedTotal);
    const sumByWeight = good * 1 + updatedNeutral * 0 + bad * -1;
    console.log(sumByWeight);
    const calculateAverage = sumByWeight / updatedTotal;
    setAverage(calculateAverage);
    const calculatePositive = (good / updatedTotal) * 100;
    setPositive(calculatePositive);
  };

  const handleBadClick = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
    const updatedTotal = good + neutral + updatedBad;
    setTotal(updatedTotal);
    const sumByWeight = good * 1 + neutral * 0 + updatedBad * -1;
    console.log(sumByWeight);
    const calculateAverage = sumByWeight / updatedTotal;
    setAverage(calculateAverage);
    const calculatePositive = (good / updatedTotal) * 100;
    setPositive(calculatePositive);
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={handleGoodClick} text="Good" />
      <Button onClick={handleNeutralClick} text="Neutral" />
      <Button onClick={handleBadClick} text="Bad" />
      <h1>Statistics</h1>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        positive={positive}
      ></Statistics>
    </div>
  );
};

export default App;
