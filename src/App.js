import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar'
import Home from './components/Home'
import Students from './containers/Students';
import Student from './containers/Student';
import Contact from './containers/Contact';
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  return (
    <Router>
      <NavBar />
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/students" element={<Students/>} />
          <Route path="/students/:id" element={<Student/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
