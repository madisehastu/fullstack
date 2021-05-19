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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header name={course} />
      <Content name={part1.name} number={part1.exercises} />
      <Content name={part2.name} number={part2.exercises} />
      <Content name={part3.name} number={part3.exercises} />
      <Total number={part1.exercises + part2.exercises + part3.exercises}  />
    </div>
  )
}

export default App;
