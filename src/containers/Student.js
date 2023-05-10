import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Course from '../components/Course'


const Student = () => {
  const {student, setStudent} = useState({courses: []})

  const [courseForm, setCourseForm] = useState(false)

  const params = useParams()

  useEffect(() => {
        fetch(`http://localhost:9292/students/${params.id}`)
        .then(res=> res.json())
        .then(data => {
            console.log(data)
            setStudent(data)
        })
    }, [])
  
    
  return (
    <div>
      <h3>student link works</h3>
      <h2></h2>
    </div>
  )
}

export default Student
