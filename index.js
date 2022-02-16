import React from 'react';
import ReactDOM from 'react-dom';

const Course = ({ course }) => {
  return (
    <div>
      {course.map(course =>
        <ul key={course.id}>
          <h1>
          {course.name}
          </h1>
          {course.parts.map(part =>
          <ul key={part.id}>
            {part.name} {part.exercises}
          </ul>)}
          <b>
          total of {course.parts.reduce((previousValue, currentValue) =>
          previousValue + currentValue.exercises, 0)} exercises
          </b>
        </ul>
      )}
    </div>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <Course course={courses} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
