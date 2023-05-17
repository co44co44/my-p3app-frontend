import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Course from '../components/Course'
import { Link } from "react-router-dom"


const Student = ({students}) => {
  const [student, setStudent] = useState({
    courses: []
  })
  
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

    
// const Student = ({students}) => {
//   const [student, setStudent] = useState({
//     courses: []
//   })

    
//     const courses = students.courses.map(course => <Course key={course.id} course={course}/>)
//     console.log(courses)
  return (
    <div>
        <Link className="go_back_link" to= "/students">
          GO BACK TO YOUR STUDENTS' LIST
        </Link>
        
        <hr/>
        <h1>{student.name}'s Courses:</h1>
        <br/>
        <Link to={`/students/${params.id}/course/new`}> 
          <button> Add a NEW COURSE for {student.name}  </button> 
        </Link> 
        <br/>
        <br/>
        <ul>
        {courses}
        </ul>
        <br/>
    </div>
  )
}

export default Student
