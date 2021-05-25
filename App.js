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
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content name={course.parts[0]['name']} number={course.parts[0]['exercises']} />
      <Content name={course.parts[1]['name']} number={course.parts[1]['exercises']} />
      <Content name={course.parts[2]['name']} number={course.parts[2]['exercises']} />
      <Total number={course.parts[0]['exercises'] + course.parts[1]['exercises'] + course.parts[2]['exercises']}  />
    </div>
  )
}

export default App;
