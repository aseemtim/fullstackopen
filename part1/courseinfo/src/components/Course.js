import React from 'react'

const Course = ({ course }) => (
    <div>
      <Header title={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts} />
    </div>
)
  
const Header = ({ title }) => <h1>{title}</h1>

const Content = ({ parts }) => (
<div>
    {parts.map(part => 
    <Part key={part.id} part={part} /> 
    )}
</div>
)

const Part = ({ part }) => <p>{part.name} {part.exercises}</p>

const Total = ({ parts }) => {
return(
<h5>
    total of {
    parts.reduce((previousValue, currentValue) => {
        return previousValue + currentValue.exercises
    }, 0)
    } exercises
</h5>
)
}

export default Course

