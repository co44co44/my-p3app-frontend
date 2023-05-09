import React, {useState, useEffect} from 'react'

const Students = () => {
    const [students, setStudents] = useState([])
    const [studentForm, setStudentsForm] = useState(false)

    useEffect(()=> {
        fetch('http://localhost:9292/students')
        .then(res=> res.json())
        .then(data => {
            console.log(data)
        })
    }, [])
    //usar esto cuando ya este hecho el backend usando el route de students VIDEO DE NANCY HASTA 22 MINUTOS, REGRESAR
    // useEffect(()=> {
    //     fetch('http://localhost:9292/students')
    //     .then(res=> res.json())
    //     .then(data => {
    //         console.log(data)
    //     })
    // }, [])
  return (
    <div>
      
    </div>
  )
}

export default Students
