import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      phone: '39-44-5589' 
    }
  ]) 

  const [newName, setNewName] = useState('')

  const [newPhone, setNewPhone] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const newPerson = {
      name : newName,
      phone: newPhone
    }
    console.log(persons.find(element => element.name === newPerson.name))
    if(persons.find(element => element.name === newPerson.name)){
      alert(`${newPerson.name} is already added to phonebook`)
    }
    else {
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewPhone('')
    }
  }

  const handleName = (event) => {
    setNewName(event.target.value)
  }

  const handlePhone = (event) => {
    setNewPhone(event.target.value)
  }

  return (
    <div>
      {console.log(persons)}
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleName} value={newName} />
        </div>
        <div>
          number: <input onChange={handlePhone} value={newPhone} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.map(person => (
          <div key={person.name}>{person.name} {person.phone}</div> 
        ))}
    </div>
  )
}

export default App;
