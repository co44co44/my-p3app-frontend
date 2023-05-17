import { React, useState } from 'react'

const CourseForm = () => {

  const [courseName, setCourseName] = useState('')
  const [courseDescription, setCourseDescription] = useState('')
  const [courseDays, setCourseDays] = useState('')
  const [courseImage, setCourseImage] = useState('')
  
  const resetForm = () => {
      setCourseName('')
      setCourseDescription('')
      setCourseDays('')
      setCourseImage('')
  }
    const handleOnSubmit = (e) => {

    console.log("Im handleOnSubmit")

    e.preventDefault()
    const newCourse= {
      name:courseName,
      description:courseDescription,
      days: courseDays,
      image_url: courseImage
    }
    fetch("http://localhost:9292/courses", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(newCourse)
      })
      .then(r => r.json())
      .then((data) => {
        console.log(data)
        resetForm()
      })
         
  }

   return (
    <div>
      <h3>ADD A NEW COURSE :</h3>
        <br/>
       <form onSubmit={handleOnSubmit}>
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
