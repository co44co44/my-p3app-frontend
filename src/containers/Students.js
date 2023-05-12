import React, {useState, useEffect} from 'react'
import StudentLink from '../components/StudentLink.js';

const Students = () => {
    const [students, setStudents] = useState([])
    const [studentForm, setStudentsForm] = useState('')

    useEffect(() => {
        fetch('http://localhost:9292/students')
        .then(res => res.json())
        .then(data => {
            
            setStudents(data)
        })
    }, [])
    
   const studentsList = students.map( st => <StudentLink key={st.id} student={st} />)
   
    const handleOnSubmit = (e) => {
      console.log("Im handleOnSubmit")
      e.preventDefault()
      setStudentsForm('')
    }

    const handleOnChange = (e) => {
      setStudentsForm(e.target.value)
    }

  return (
    <div>
      <h4> Click on the Students button below to see the classes they take: </h4>
      <br/>
      <ul>
        {studentsList}
      </ul>
      <hr/>
      <form onSubmit={handleOnSubmit}>
        <label> <h3>ADD A NEW STUDENT:</h3> </label>
        <br></br>
        <label> Name: </label>
        <input type="text" value={studentForm} onChange={handleOnChange}></input>
        <button type="submit">  SUBMIT  </button>
      </form>
    </div>
  )
}

export default Students
