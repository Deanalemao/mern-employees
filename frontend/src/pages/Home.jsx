import React from 'react'
import { Link } from 'react-router'

const Home = () => {
  return (
    <div>
      <h1>Employee Management System</h1>

      <Link to="/employees">
        <button>View Employees</button>
      </Link>
      <Link to="/addemployee">
      <button>Add Employee</button>
      </Link>
      <Link to="/employees">
      <button>Manage Employees</button>
      </Link>
    </div>
  )
}

export default Home