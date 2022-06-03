import { useState } from 'react'

const Heading = (props) => <h1>{props.text}</h1>
const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}>{text}</button>
)

const StatisticLine = ({ text, number}) => {
  return (
    <div>
      {text} {number}
    </div>
  )
} 

const Statistics = ({good, bad, neutral}) => {
  const total = good + bad + neutral
  if(total === 0) {
    return(
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <StatisticLine text={"good"} number={good} />
      <StatisticLine text={"neutral"} number={neutral} />
      <StatisticLine text={"bad"} number={bad} />
      <StatisticLine text={"all"} number={total} />
      <StatisticLine 
        text={"average"} 
        number={(good - bad) / (total)} />
      <StatisticLine
        text={"positive"} 
        number={(good/(total))*100+" %"} 
      />
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  return (
    <div>
      <Heading text={"give feedback"} />
      <Button text={"good"} handleClick={handleGood} />
      <Button text={"neutral"} handleClick={handleNeutral} />
      <Button text={"bad"} handleClick={handleBad} />
      <Heading text={"statistics"} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
    )
}

export default App;
