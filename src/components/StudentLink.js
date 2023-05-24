import React from 'react';
import  { Link } from 'react-router-dom';

const StudentLink = ({student, onDeleteStudent}) => {
   const {id, name} = student
  
  const handleDelete = () => {

      fetch(`http://localhost:9292/students/${id}`, {
      method:"DELETE"
  })
        .then (r => r.json())
        .then (() => onDeleteStudent(id)) 

  }
  return (
    <div id="card" >
          <button id = "delete_button" className= 'delete' onClick={handleDelete}> X </button>
          <br/>
        <Link to={`/students/${id}`} style={{background: "black" }}>
          <h2> 🕴️ <br/> {name} </h2>
        </Link>
       
      
    </div>
    
  )
}

export default StudentLink
