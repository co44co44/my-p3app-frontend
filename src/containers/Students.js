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
         
          {/* <StudentForm/> */}
        </nav>
        <br/>
          <h2> MY STUDENTS:  </h2>
        <br/>
        <Link to= {"/students/new"}> 
          <button> Add a New Student  </button>
        </Link>
        <ul>
          {studentsList}
        </ul>
        <hr/>
      
      
        <hr/>
    </div>  
  )
}

export default Students
