import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('add a new name...')
  const [newNumber, setNewNumber] = useState('add a new number...')
  const [searchName, setSearchName] = useState('search phonebook')
  const [showAll, setShowAll] = useState(true)

  const names = persons.map(person =>
    person.name + "\t" + person.number)

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber,
    }
    setPersons(persons.concat(nameObject))
    setNewName('add another name...')
    setNewNumber('add another number')
  }

  const addOnlyNew = names.includes(newName)
    ? window.alert(`${newName} is already added to phonebook`)
    : addName

  const filter = names.filter((person =>
      person.indexOf(searchName) !== -1))

  const phonebook = persons.map((person) =>
        <p>{person.name} {person.number}</p>)

  const handleSearchChange = (event) => {
      console.log(event.target.value)
      setSearchName(event.target.value)
    }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <form>
        <div>
        search: <input
        value={searchName}
        onChange={handleSearchChange}/>
        </div>
        <div>
        {filter}
        </div>
      </form>
      <h2> add a new </h2>
      <form>
        <div>
          name: <input
          value={newName}
          onChange={handleNameChange}/>
        </div>
        <div>
          number: <input
          value={newNumber}
          onChange={handleNumberChange}/>
        </div>
        <div>
          <button onClick={addOnlyNew} type="submit">add</button>
          <div>debug: {newName} {newNumber}</div>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {phonebook}
      </div>
    </div>
  )
}

export default App
