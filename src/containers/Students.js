import { Link } from "react-router-dom"
import StudentLink from '../components/StudentLink.js';
import Student from "./Student.js";

const Students = ({students}) => {

  console.log ({students})
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
        <Link to= {"/students/new"}> 
        <button> Add a New Student  </button>
        </Link>
      </nav>
        <hr/>
    </div>  
  )
}

export default Students
