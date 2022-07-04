import { useState, useEffect } from 'react'
import axios from 'axios'
import phoneBookService from './services/persons.js'

const Filter = ({ handleFilter, newFilter}) => (
  <p>
    filter shown with
    <input onChange={handleFilter} value={newFilter} />
  </p>
)

const PersonForm = (
  { handleSubmit, handleName, newName, handlePhone, newPhone} ) => (
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
)

const Persons = ({ newFilter, persons}) => {
  if(newFilter === '') {
    return(persons.map(person => 
      <Person key={person.name} person={person} />))
  }
  else{
    return(
      persons.filter(element => element.name.toLowerCase()
        .includes(newFilter.toLowerCase()))
          .map(person => (
            <Person key={person.name} person={person} /> 
          )))
  }
}

const Person = ({ person }) => {
  return <div>{person.name} {person.number}</div>
}

const App = () => {
  const [persons, setPersons] = useState([]) 

  const [newName, setNewName] = useState('')

  const [newPhone, setNewPhone] = useState('')

  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    phoneBookService
      .getAll()
      .then(initialRecord => {
        setPersons(initialRecord)
      })
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    const newPerson = {
      name : newName,
      number: newPhone
    }

    if(persons.find(element => element.name === newPerson.name)){
      alert(`${newPerson.name} is already added to phonebook`)
    }
    else {
      phoneBookService
        .create(newPerson)
        .then(returnedRecord => {
          setPersons(persons.concat(returnedRecord))
          setNewName('')
          setNewPhone('')
        })
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
      <Filter handleFilter={handleFilter} values={newFilter}/>
      <h3> Add a new</h3>
      <PersonForm handleSubmit={handleSubmit} handleName={handleName} newName={newName} handlePhone={handlePhone} newPhone={newPhone} />
      <h2>Numbers</h2>
      <Persons newFilter={newFilter} persons={persons}/>
    </div>
  )
}

export default App;
