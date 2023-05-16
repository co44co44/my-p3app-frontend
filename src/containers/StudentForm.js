import { React, useState } from 'react'
import { Container } from 'react-bootstrap'


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
      .then((r) => r.json())
      .then((newStudent) => {
        addNewStudent(newStudent)   
        resetForm()
      })
    }

  const handleOnChange = (e) => {
    setStudentName(e.target.value)
    console.log("im handle OnChange")
  }
  
 
  return (
    <div>
      <h3>ADD A NEW STUDENT:</h3>
        <br/>
       <form onSubmit={handleOnSubmit}>
        <label> Name: </label>
        <input type="text" value={studentName} onChange={handleOnChange}></input>
        <button type="submit">  SUBMIT  </button>
      </form>
    </div>
  )
}

export default StudentForm
