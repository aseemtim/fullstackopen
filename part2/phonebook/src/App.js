import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const newPerson = {
      name : newName
    }
    console.log(persons.find(element => element.name === newPerson.name))
    if(persons.find(element => element.name === newPerson.name)){
      alert(`${newPerson.name} is already added to phonebook`)
    }
    else {
      setPersons(persons.concat(newPerson))
      setNewName('')
    }
  }

  const handleText = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      {console.log(persons)}
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleText} value={newName}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.map(person => (
          <div key={person.name}>{person.name}</div> 
        ))}
    </div>
  )
}

export default App;
