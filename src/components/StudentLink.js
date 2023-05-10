import React from 'react';
import  { Link } from 'react-router-dom';

const StudentLink = ({student}) => {
  return (
    <div>
        <Link to={`/students/${student.id}`}>
          <h2>{student.name}</h2>
        </Link>
    </div>
    
  )
}

export default StudentLink
