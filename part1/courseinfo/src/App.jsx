const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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
  const Header = (props) => {
    console.log(props)
    return (
      <h1>{props.course}</h1>
    )
  }
  
  const Content = (props) => {
    console.log(props)
      return (
        <div>
        <p> {parts[0].name} {parts[0].exercises}</p>
        <p> {parts[1].name} {parts[1].exercises}</p>
        <p> {parts[2].name} {parts[2].exercises}</p>
        </div>
      )
    
  }
  
  const Total = () => {
    const total = parts[0].exercises + parts[1].exercises + parts[2].exercises;
    return(
      <div>
        <p>Number of exercises {total}</p>
      </div>
    )
  }


  return (
    <div>
    <Header course={course} />
    <Content parts={parts} />
    <Total parts={parts} />
  </div>
  )
}


export default App