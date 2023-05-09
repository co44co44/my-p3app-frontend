import React, {useState, useEffect} from 'react'

const Students = () => {
    const [students, setStudents] = useState([])
    const [studentForm, setStudentsForm] = useState(false)

    useEffect(() => {
        fetch('http://localhost:9292/students')
        .then(res=> res.json())
        .then(data => {
            console.log(data)
            setStudents(data)
        })
    }, [])
    
   
  return (
    <div>
      
    </div>
  )
}

export default Students
