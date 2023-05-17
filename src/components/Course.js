import React from 'react'

const Course = ({course}) => {
    return (
      <ul className='card'>

        <li>
        <h3>Subject:{course.name}</h3>
        <h3>Level:{course.description}</h3>
        <h3>Book/Program:<img src={course.image_url} alt={course.image_url}/></h3>
        <h3>Days:{course.days}</h3>
        
         
        <br/>
        </li>
      </ul>
    )
}

export default Course
