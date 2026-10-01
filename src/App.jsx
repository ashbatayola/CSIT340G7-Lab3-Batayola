const Header = (props) => <h1>{props.course}</h1>

const Part = (props) => <p>{props.name} {props.units} units</p>

const Content = (props) => (
  <div>
    <Part name={props.parts[0].name} units={props.parts[0].units} />
    <Part name={props.parts[1].name} units={props.parts[1].units} />
    <Part name={props.parts[2].name} units={props.parts[2].units} />
  </div>
)

const Total = (props) => (
  <p>Total units: {props.parts[0].units + props.parts[1].units + props.parts[2].units}</p>
)

const Footer = (props) => (
  <footer>{props.name} - {props.code} - {props.section}</footer>
)

const App = () => {
  const course = 'CSIT321'
  const parts = [
    { name: 'RIZAL031', units: 3 },
    { name: 'IT365', units: 3 },
    { name: 'IT317', units: 3 },
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
      <Footer name="Ashlee Faye D. Batayola" code="CSIT340" section="G7" />
    </div>
  )
}

export default App