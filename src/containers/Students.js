import { Link } from "react-router-dom"
import StudentLink from '../components/StudentLink.js';
import StudentForm from "./StudentForm.js";



const Students = ({students, onDeleteStudent}) => {

  // console.log ({students})

    const studentsList = students.map(student => 
    <StudentLink key={student.id} student={student} onDeleteStudent = {onDeleteStudent}/>)
  
    return (
    <div>
        <nav>
          <Link to= {"/students/new"}> 
          <button> Add a New Student  </button>
          </Link>
          {/* <StudentForm/> */}
        </nav>
        <br/>
          <h2> Click on the Student's name to see the classes they take: </h2>
        <br/>
        <ul>
          {studentsList}
        </ul>
        <hr/>
      
      
        <hr/>
    </div>  
  )
}

export default Students
