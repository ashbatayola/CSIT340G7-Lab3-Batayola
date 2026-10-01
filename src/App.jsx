const Header = (props) => <h1>{props.course}</h1>

const Part = (props) => <p>{props.name} {props.units} units</p>

const Content = (props) => (
  <div>
    <Part name={props.part1.name} units={props.part1.units} />
    <Part name={props.part2.name} units={props.part2.units} />
    <Part name={props.part3.name} units={props.part3.units} />
  </div>
)

const Total = (props) => <p>Total units: {props.total}</p>

const Footer = (props) => (
  <footer>{props.name} - {props.code} - {props.section}</footer>
)

const App = () => {
  const course = 'CSIT321'
  const part1 = { name: 'RIZAL031', units: 3 }
  const part2 = { name: 'IT365', units: 3 }
  const part3 = { name: 'IT317', units: 3 }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total total={part1.units + part2.units + part3.units} />
      <Footer name="Ashlee Faye D. Batayola" code="CSIT340" section="G7" />
    </div>
  )
}

export default App