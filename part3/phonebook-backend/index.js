const express = require('express')
const app = express()

app.use(express.json())

let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/', (request, response) => {
    response.send('<h1>Phonebook</h1>')
})

app.get('/api/persons/', (request, response) => {
    response.json(persons)
})

app.get('/info', (request, response) => {
  const reqTime = new Date()
  response.send(
    `<div>
      <p>Phonebook has info for ${persons.length} people</p>
      <p>${reqTime}</p>
    </div>`
    )
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons.find(person => person.id === id)
    ? response.json(person)
    : response.status(404).end()
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)

  response.status(204).end()
})

app.post('/api/persons', (request, response) => {
  const body = request.body

  if(!body.name || !body.number){
    return response.status(400).json({
      error: 'name/number is missing'
    })
  }

  const duplicatePerson = persons.find(person => person.name.toLowerCase() === body.name.toLowerCase())
  
  if(duplicatePerson) {
    return response.status(400).json({
      error: 'name must be unique'
    })
  }


  const person = {
    id: Math.floor(Math.random()*1000),
    name: body.name,
    number: body.number,
    date: new Date(),
  }

  persons = persons.concat(person)
  
  response.json(person)

})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})