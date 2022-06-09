import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      phone: '39-44-5589' 
    }
  ]) 

  const [newName, setNewName] = useState('')

  const [newPhone, setNewPhone] = useState('')

  const [newFilter, setNewFilter] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const newPerson = {
      name : newName,
      phone: newPhone
    }

    if(persons.find(element => element.name === newPerson.name)){
      alert(`${newPerson.name} is already added to phonebook`)
    }
    else {
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewPhone('')
    }
  }

  const handleFilter = (event) => {
    setNewFilter(event.target.value)
  }

  const handleName = (event) => {
    setNewName(event.target.value)
  }

  const handlePhone = (event) => {
    setNewPhone(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <p>
        filter shown with
        <input onChange={handleFilter} value={newFilter} />
      </p>
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
      {newFilter === '' ? (
        persons.map(person => (
          <div key={person.name}>{person.name} {person.phone}</div> 
        ))) : (
        persons.filter(element => element.name.toLowerCase()
          .includes(newFilter.toLocaleLowerCase()))
        .map(person => (
          <div key={person.name}>{person.name} {person.phone}</div> 
        )))
      }
    </div>
  )
}

export default App;
