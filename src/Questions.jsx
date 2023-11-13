import React from 'react'
import SingleQuestion from './SingleQuestion'
// compo
const Questions = ({data}) => {

  return (
    <section className='container'>
      <h1>Questions</h1>
      {data.map((question)=>{
         return <SingleQuestion question = {question} key={question.id}/>
      })}
    </section>
  )
}

export default Questions
