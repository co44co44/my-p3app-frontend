import React from 'react'

const Course = ({course}) => {
    return (
      <ul className='card'>
        <li>
        <h3>{course.name}</h3>
        <h3>{course.description}</h3>
        <h3>{course.days}</h3>
        <figure> 
          <img src={course.image_url} alt={course.image_url}/>
          </figure>
        <br/>
        </li>
      </ul>
    )
}

export default Course
