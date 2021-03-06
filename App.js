import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const Statistics = (props) => {
    if (props.clicks === 0) {
      return (
        <div>
          <h1> statistics </h1>
          <div> No feedback given </div>
        </div>
      )
    }
    return (
      <div>
        <h1> statistics </h1>
        <div> good {props.good} </div>
        <div> neutral {props.neutral} </div>
        <div> bad {props.bad} </div>
        <div> all {props.all} </div>
        <div> average {props.average} </div>
        <div> positive {props.positive} </div>
      </div>
    )
    }

  return (
    <div>
      <h1> give feedback </h1>
      <button onClick={() => setGood(good + 1)}>
      good
      </button>
      <button onClick={() => setNeutral(neutral + 1)}>
      neutral
      </button>
      <button onClick={() => setBad(bad + 1)}>
      bad
      </button>
      <Statistics
      clicks= {good + neutral + bad}
      feedback= {good + neutral + bad}
      good= {good}
      neutral= {neutral}
      bad= {bad}
      all= {good + neutral + bad}
      average = {(good - bad) / (good + neutral + bad)}
      positive = {good / (good + neutral + bad)}/>
    </div>
  )
}

export default App
