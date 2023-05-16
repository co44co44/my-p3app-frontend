import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import NavBar from './components/NavBar'
import Home from './components/Home'
import Students from './containers/Students';
import Student from './containers/Student';
import Contact from './containers/Contact';
import StudentForm from './containers/StudentForm';
import CourseForm from'./containers/CourseForm';



function App() {
  const [students, setStudents] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/students')
    .then(res => res.json())
    .then(data => {
        setStudents(data)
    })
}, [])

const addNewStudent =(newCourseObj)=>{
  setStudents([...students, newCourseObj])
}
// console.log({students})
return (
    <Router>
      <NavBar />
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/students" element={<Students students = {students}/>} />
          <Route path="/students/:id" element={<Student/>} />
          <Route exact path="student/new" element ={<StudentForm/>} addNewStudent = {addNewStudent}/>
          <Route exact path="students/:id/course" element = {<CourseForm/>}/>
          <Route exact path="/contact" element={<Contact/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
