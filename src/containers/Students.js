import { Link } from "react-router-dom"
import StudentLink from '../components/StudentLink.js';
import StudentForm from "./StudentForm.js";


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
        <hr/>
        <nav>
          <Link to= {"/students/new"}> 
          <button> Add a New Student  </button>
          </Link>
        </nav>
        {/* <StudentForm/> */}
        <hr/>
    </div>  
  )
}

export default Students
