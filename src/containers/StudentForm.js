import { React, useState } from 'react'
import { Container } from 'react-bootstrap'


const StudentForm = ({addNewStudent}) => {
      const [studentName, setStudentsName] = useState('')

      const handleOnSubmit = (e) => {
      console.log("Im handleOnSubmit")
      e.preventDefault()
      setStudentsName('')
    }

    const handleOnChange = (e) => {
      setStudentsName(e.target.value)
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
