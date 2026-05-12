import React from 'react'
import { Route,Routes } from 'react-router';
import Home from "./pages/Home.jsx";
import Employee from "./pages/Employee.jsx";
import InsertEmployee from "./pages/InsertEmployee.jsx";
import EditEmployee from "./pages/EditEmployee.jsx";
import Navbar from "./components/Navbar.jsx";

const App = () => {
  return (
    
    <div>

      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/employees" element={<Employee/>}/>
        <Route path="/addemployee" element={<InsertEmployee/>}/>
        <Route path="/edit/:id" element={<EditEmployee/>}/>
      </Routes>
    </div>
  )
}

export default App