import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)


  return (
    <div>
      <h1> give feedback </h1>
      <button onClick={() => {
        setGood(good + 1);
        setAll(all + 1);
        setAverage((good-bad)/all);
        setPositive(good/all)}
      }>
      good
      </button>
      <button onClick={() => {
        setNeutral(neutral + 1);
        setAll(all + 1);
        setAverage((good-bad)/all);
        setPositive(good/all)}}>
      neutral
      </button>
      <button onClick={() => {
        setBad(bad + 1);
        setAll(all + 1);
        setAverage((good-bad)/all);
        setPositive(good/all)}}>
      bad
      </button>
      <h1> statistics </h1>

      <div> good {good} </div>
      <div> neutral {neutral} </div>
      <div> bad {bad} </div>
      <div> all {all} </div>
      <div> average {average} </div>
      <div> positive {positive} </div>
    </div>
  )
}

export default App
