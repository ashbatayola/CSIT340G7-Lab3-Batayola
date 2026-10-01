const Header = (props) => <h1>{props.course}</h1>

const Part = (props) => <p>{props.name} {props.units} units</p>

const Content = (props) => (
  <div>
    <Part name={props.part1} units={props.units1} />
    <Part name={props.part2} units={props.units2} />
    <Part name={props.part3} units={props.units3} />
  </div>
)

const Total = (props) => <p>Total units: {props.total}</p>

const Footer = (props) => (
  <footer>{props.name} - {props.code} - {props.section}</footer>
)

const App = () => {
  const course = 'CSIT321'
  const part1 = 'RIZAL031'
  const units1 = 3
  const part2 = 'IT365'
  const units2 = 3
  const part3 = 'IT317'
  const units3 = 3

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1} units1={units1}
        part2={part2} units2={units2}
        part3={part3} units3={units3}
      />
      <Total total={units1 + units2 + units3} />
      <Footer name="Ashlee Faye D. Batayola" code="CSIT340" section="G7" />
    </div>
  )
}

export default App