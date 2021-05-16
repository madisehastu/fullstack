import React from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>
        {props.name}
      </h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>
        The part "{props.name}" has {props.number} exercises.
      </p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
        Total number of excercises is {props.number}.
      </p>
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header name={course} />
      <Content name={part1} number={exercises1} />
      <Content name={part2} number={exercises2} />
      <Content name={part3} numberr={exercises3} />
      <Total number={exercises1 + exercises2 + exercises3}  />
    </div>
  )
}

export default App
