import { useState } from 'react'

const Heading = (props) => <h1>{props.text}</h1>
const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}>{text}</button>
)
const Statistics = ({ text, number }) => {
  return (
    <div>
      {text} {number}
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
      <Statistics text={"good"} number={good} />
      <Statistics text={"neutral"} number={neutral} />
      <Statistics text={"bad"} number={bad} />
    </div>
    )
}

export default App;
