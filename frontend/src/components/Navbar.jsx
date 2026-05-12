import React from 'react'
import {Link} from "react-router";

const Navbar = () => {
  return (
    <div>
        <Link to="/">Home</Link> |{""}
        <Link to="/employees">Employees</Link> |{""}
        <Link to="/addemployee">Add Employee</Link> 
    </div>
  )
}

export default Navbar