import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('add a new name...')

  const names = persons.map(person =>
    person.name)
    console.log(names)

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
    }
    setPersons(persons.concat(nameObject))
    setNewName('add another name...')
  }

  const addOnlyNew = names.includes(newName)
    ? window.alert(`${newName} is already added to phonebook`)
    : addName

  const handleInputChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input
          value={newName}
          onChange={handleInputChange}/>
        </div>
        <div>
          <button onClick={addOnlyNew} type="submit">add</button>
          <div>debug: {newName}</div>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul> {persons.map((person) =>
        <p>{person.name}</p>)}
      </ul>
    </div>
  )
}

export default App
