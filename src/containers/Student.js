import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Course from '../components/Course'


const Student = () => {
  const [student, setStudent] = useState({
    courses: []
  })

  // const [courseForm, setCourseForm] = useState(false)

  const params = useParams()

  useEffect(() => {
        fetch(`http://localhost:9292/students/${params.id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setStudent(data)
        })
    }, [])
  
    
    const courses = student.courses.map(course => <Course key={course.id} course={course}/>)
    console.log(courses)
  return (
    <div>
      <h2>{student.name}</h2>
      <br/>
      <h3>Courses:</h3>
      <br/>
      <ul>
      {courses}
      </ul>
      
      <br/>
    </div>
  )
}

export default Student
