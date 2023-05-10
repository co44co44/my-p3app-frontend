import React, {useState, useEffect} from 'react'
import StudentLink from '../components/StudentLink.js';

const Students = () => {
    const [students, setStudents] = useState([])
    const [studentForm, setStudentsForm] = useState(false)

    useEffect(() => {
        fetch('http://localhost:9292/students')
        .then(res=> res.json())
        .then(data => {
            console.log(data)
            setStudents(data)
        })
    }, [])
    
   const studentsList = students.map( st => <StudentLink key={st.id} student={st} />)
   
  return (
    <div>
      <ul>
        
        {studentsList}
      </ul>
    </div>
  )
}

export default Students
