import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistic = (props) => {
  return (
    <div>
    {props.text} {props.value}
    </div>
  )}

const Statistics = (props) => {
  if (props.clicks === 0) {
     return (
       <div>
         No feedback given
       </div>
     )
   }
   return (
     <div>
     <Statistic text="good" value={props.good}/>
     <Statistic text="neutral" value={props.neutral}/>
     <Statistic text="bad" value={props.bad}/>
     <Statistic text="all" value={props.all}/>
     <Statistic text="average" value={props.average}/>
     <Statistic text="positive" value={props.positive}/>
     </div>
   )
 }

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1> give feedback </h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h1> statistics </h1>
      <Statistics clicks={good+neutral+bad}
      good={good}
      neutral={neutral}
      bad={bad}
      all={good + neutral + bad}
      average={(good - bad) / (good + neutral + bad)}
      positive={good / (good + neutral + bad)}/>
    </div>
    )
  }

export default App
