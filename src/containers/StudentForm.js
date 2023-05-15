import React from 'react'
import { Container } from 'react-bootstrap'


const StudentForm = () => {
      const [studentForm, setStudentsForm] = useState('')

      const handleOnSubmit = (e) => {
      console.log("Im handleOnSubmit")
      e.preventDefault()
      setStudentsForm('')
    }

    const handleOnChange = (e) => {
      setStudentsForm(e.target.value)
      console.log("im handle OnChange")
    }
  return (
    <div>
      <h3>ADD A NEW STUDENT:</h3>
        <br/>
       <form onSubmit={handleOnSubmit}>
        <label> Name: </label>
        <input type="text" value={studentForm} onChange={handleOnChange}></input>
        <button type="submit">  SUBMIT  </button>
      </form>
    </div>
  )
}

export default StudentForm
