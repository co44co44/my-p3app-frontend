import { React, useState } from 'react'
import { useParams } from 'react-router-dom'

//TO DO: FALTA ADDNEWCOURSE, FIJARSE COMO HACER.
const CourseForm = ({addNewCourse}) => {
  // const [newCourse, setNewCourse] = useState([])
  const [courseName, setCourseName] = useState('')
  const [courseDescription, setCourseDescription] = useState('')
  const [courseImage, setCourseImage] = useState('')
  const [courseDays, setCourseDays] = useState('')

  const params = useParams()
// const addNewCourse =(newCourse)=>{
//   setNewCourse((courseObj) => [...courseObj, newCourse])
// } 
  const resetForm = () => {
      setCourseName('')
      setCourseDescription('')
      setCourseDays('')
      setCourseImage('')
  }
  const handleOnSubmit = (e) => {
    console.log("Im handleOnSubmitCourse")
    e.preventDefault()
    
    // const newCourse= {
    //   name:courseName,
    //   description:courseDescription,
    //   image_url: courseImage,
    //   days: courseDays
      
    // } 

    fetch("http://localhost:9292/courses", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name:courseName,
        description:courseDescription,
        image_url: courseImage,
        days: courseDays,
        student_id: params.id
      })
    })
      .then(r => r.json())
      .then((newCourse) => {
        console.log(newCourse)
        addNewCourse(newCourse)
        resetForm()
      })
         
  }

   return (
    <div>
      
       <br/>
       <form onSubmit={handleOnSubmit}>

          <h3>ADD A NEW COURSE :</h3>
          <br/>
          <label> Subject: </label>
          <input type="text"  value={courseName} onChange={e => setCourseName(e.target.value)}></input>
          <br/>

          <label> Level: </label>
            <input type="text"  value={courseDescription} onChange={e => setCourseDescription(e.target.value)}></input>
          <br/>
        
          <label> Book/Program: </label>
            <input type="text"  value={courseImage} onChange={e => setCourseImage(e.target.value)}></input>
          <br/>
          
          <label> Days: </label>
          <input type="text"  value={courseDays} onChange={e => setCourseDays(e.target.value)}></input>
          <br/>
        
          <button type="submit">  SUBMIT  </button>
      </form>
    </div>
  )
}

export default CourseForm
