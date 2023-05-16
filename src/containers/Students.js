import { NavLink } from "react-router-dom"
import StudentLink from '../components/StudentLink.js';


const Students = ({students}) => {

console.log({students})

    const studentsList = students.map(student => <StudentLink key={student.id} student={student} />)
  
    return (
    <div>
        <br/>
      <h4> Click on the Students button below to see the classes they take: </h4>
        <br/>
      <ul>
        {studentsList}
      </ul>
      <nav>
        <NavLink to= {"/students/new"}> MY STUDENTS</NavLink>  
      </nav>
        <hr/>
    </div>  
  )
}

export default Students
