import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
// import Students from '../containers/Students'

const StudentForm = ({addNewStudent}) => {

  const [studentName, setStudentName] = useState('')
      
  const resetForm = () => {
      setStudentName("")
  }
  const handleOnSubmit = (e) => {
      console.log("Im handleOnSubmit")
      e.preventDefault()
      
      
      fetch("http://localhost:9292/students", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name:studentName
        })
    })
        .then(r => r.json())
        .then((newStudent) => addNewStudent(newStudent)   )
          resetForm()
          // console.log(newStudent)
        
      }

  const handleOnChange = (e) => {
    setStudentName(e.target.value)
    console.log("im handle OnChange")
  }
  
 
  return (
    <div  style={{background: "white" }} >
      
       <Container>
        <br/>
      <h3 style={{color: "black"}}>ADD A NEW STUDENT:</h3>
        
       <form onSubmit={handleOnSubmit}>
        <label> Name: </label>
        <input type="text" value={studentName} onChange={handleOnChange}></input>
        <button type="submit">  SUBMIT  </button>
        <hr/>
      </form>
      </Container >
    </div>
  )
}

export default StudentForm
