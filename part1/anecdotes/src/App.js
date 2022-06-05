import {useState} from 'react'

const Vote = ({vote}) => {
  return (
  <div>
    has {vote} votes
  </div>
  )
}

const Button = ({ buttonHandler, text }) => 
  <button onClick={buttonHandler}>{text}</button>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]


  const max = anecdotes.length

  const [selected, setAnecdote] = useState(0)
  const [vote, setVote] = useState([0,0,0,0,0,0,0])

  const handleVote = () => {
    const newVotes = vote.concat()
    newVotes[selected] = vote[selected] + 1
    setVote(newVotes)
  }

  const getAnecdote = () => {
    const randomNumber = Math.floor(Math.random() * max)
    console.log(randomNumber)
    console.log(vote)
    setAnecdote(randomNumber)
  }
  return (
    <div>
      {anecdotes[selected]}
      <Vote vote={vote[selected]} />
      <div>
        <Button buttonHandler={getAnecdote} text={"next anecdote"} />
        <Button buttonHandler={handleVote} text={"vote"} />
      </div>
    </div>
  )
}


export default App;
