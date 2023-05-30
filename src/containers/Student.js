import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Course from '../components/Course'
import { Link } from "react-router-dom"
import CourseForm from './CourseForm'


const Student = ({students, setStudents}) => {
  const [student, setStudent] = useState({
    courses: [],
  })

  const {id} = useParams()
  // const params = useParams()
// find by id instead of fetch
  useEffect(() => {
      const selectedStudent = students.find(s => s.id ===  parseInt(id))
      if (selectedStudent){
        setStudent(selectedStudent)
      }
    
    }, [students, id])
  
    //should be in app.js and pass it here
    const courses = student.courses.map(course => <Course key={course.id} course={course}/>)
    console.log(courses)

   
  return (
    <div>
        <Link className="go_back_link" to= "/students">
          GO BACK TO YOUR STUDENTS' LIST
        </Link>
        
        <hr/>
        <h1>{student.name}'s Courses:</h1>
        <br/>
        <Link to={`/students/${id}/course/new`}> 
          <button> Add a NEW COURSE for {student.name}  </button> 
        </Link> 
        {/* <CourseForm/> */}
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
