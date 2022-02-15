import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }
  const Course = ({ course }) => {
    return (
      <div>
        <h1>
          {course.name}
        </h1>
        <ul>
          {course.parts.map(part =>
            <li key={part.id}>
              {part.name} {part.exercises}
            </li>
          )}
        </ul>
      </div>
    )
  }
  const Total = ({course}) => {
    const initialValue = 0
    const total = course.parts.reduce((previousValue, currentValue) =>
      previousValue + currentValue.exercises,
      0)
    return (
      <p> total number of excercises is {total} </p>
    )
  }



  return (
    <div>
      <Course course={course} />
      <Total course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
