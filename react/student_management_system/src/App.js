import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import {Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Students from './components/Students';

function App() {
  return (
    < >
      <Nav />
      <h1>Student Management System</h1>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/students" element={<Students />}/>
      </Routes>
    </>
  );
}

export default App;