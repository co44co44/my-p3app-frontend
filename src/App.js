import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar'
import Home from './components/Home'
import Student from './containers/Student';



function App() {
  return (
    <Router>
      <NavBar />
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/students" element={<Student/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
