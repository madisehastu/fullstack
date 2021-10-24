import React, { useState } from 'react'

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]

  const [votes,setVotes] = useState(Array(anecdotes.length).fill(0))
  const addVotes = (x) => {
    let copies = [...votes]
      copies[x] += 1
      setVotes(copies)
  }
  const [selected, setSelected] = useState(0)

  const vote = () => {
    addVotes(selected)
    funkts(votes)
  }
  const next = () => {
    setSelected(getRandomInt(anecdotes.length))
  }

  const [maxvalue, setValue] = useState(0)
  const [index, setIndex] = useState(0)


  const funkts = (arr) => {
    for(var i=0;i<arr.length;i++){
        if(arr[i]>maxvalue){
        setValue(arr[i])
        setIndex(i);
       }
    }
  }

  return (
    <div>
      <h1> Anecdote of the day</h1>
      {anecdotes[selected]}
      <div> has {votes[selected]} votes </div>
      <button onClick={vote}> vote </button>
      <button onClick={next}> next anecdote </button>
      <h1> Anecdote with the most votes</h1>
      {anecdotes[index]}
      <div> has {votes[index]} votes </div>
    </div>
  )
}

export default App
