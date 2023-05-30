import { Link } from "react-router-dom"
import React, {useState} from 'react'
import StudentLink from '../components/StudentLink.js';
import StudentForm from "./StudentForm.js";



const Students = ({students, setStudents, onDeleteStudent}) => {


    const [studentFormFlag, setStudentFormFlag] = useState(false)

    const addStudent = (student) => {
      fetch("http://localhost:9292/students", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(student)
    })
        .then(r => r.json())
        .then((newStudent) => {
          setStudents([...students,newStudent])   
    })
    setStudentFormFlag(false)
  }

  const toggleAddStudentForm = (e) => {
    setStudentFormFlag(true)
  }

    const studentsList = students.map(student => 
    <StudentLink key={student.id} student={student} onDeleteStudent = {onDeleteStudent}/>)
  
    return (
    <div>
        <nav>
         
        </nav>
        <br/>
          <h2> MY STUDENTS:  </h2>
        <br/>
        {/* <Link to= {"/students/new"}> 
          <button> Add a New Student  </button>
        </Link> */}
        {studentFormFlag ? <StudentForm addStudent={addStudent}/> : <button onClick={toggleAddStudentForm}>Add Student</button>}
        <ul>
          {studentsList}
        </ul>
        
    </div>  
  )
}

export default Students
