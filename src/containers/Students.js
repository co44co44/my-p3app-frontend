
import StudentLink from '../components/StudentLink.js';


const Students = ({ students}) => {

console.log({students})

    const studentsList = students.map(st => <StudentLink key={st.id} student={st} />)
  
    return (
    <div>
        <br/>
      <h4> Click on the Students button below to see the classes they take: </h4>
        <br/>
      <ul>
        {studentsList}
      </ul>
        
        <hr/>
    </div>  
  )
}

export default Students
