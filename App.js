import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: "040-1234567"}
  ])
  const [newName, setNewName] = useState('add a new name...')
  const [newNumber, setNewNumber] = useState('add a new number...')

  const names = persons.map(person =>
    person.name)
    console.log(names)

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
      <h2>Phonebook</h2>
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
      <ul> {persons.map((person) =>
        <p>{person.name} {person.number}</p>)}
      </ul>
    </div>
  )
}

export default App
