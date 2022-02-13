const App = (props) => {
  const Course = ({ course }) => {
    return (
      <div>
        <h1>{course.name}</h1>
        <ul>
          <li>{course.parts}</li>
        </ul>
      </div>
    )
  }
}

export default App
