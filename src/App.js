import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React, {useState, useEffect} from 'react'
// import "bootstrap/dist/css/bootstrap.min.css";
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
  const [newCourse, setNewCourse] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/students')
    .then(res => res.json())
    .then(data => {
        setStudents(data)
    })
}, [])


const addNewCourse =(newCourse)=>{
  setNewCourse((courseObj) => [...courseObj, newCourse])
} 

const addNewStudent =(newStudent)=>{
  setStudents((studentObj) => [...studentObj, newStudent])
}

const onDeleteStudent =(id) => {
  setStudents(prevStudents => {
    const filteredArray = prevStudents.filter(student=> student.id !== id )
    return filteredArray})

}
// console.log({students})
return (
    <Router>
      
      <NavBar />
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/students" element={<Students onDeleteStudent = {onDeleteStudent} students = {students} setStudents={setStudents} />} />
          <Route path="/students/:id" element={<Student students = {students} setStudents={setStudents}/>} />
          <Route exact path="students/new" element ={<StudentForm  addNewStudent = {addNewStudent}/>}/>
          <Route exact path="students/:id/course/new" element = {<CourseForm addNewCourse = {addNewCourse}  newCourse = {newCourse}/>}/>
          <Route exact path="/contact" element={<Contact/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
