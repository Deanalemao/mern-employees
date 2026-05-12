import React, { useEffect, useState } from 'react';
import api from '../api/axios.js';
import { Link } from 'react-router';

const Employee = () => {

  const [employees, setEmployees] = useState([]);
  const [department , setDepartment] = useState("");

  useEffect(() => {
    fetchEmployees();
  }, [department]);


  const fetchEmployees = async () => {

    try {

      const response = await api.get(`/employees?department=${department}`);

      setEmployees(response.data);

      console.log(response.data);

    } catch (error) {

      console.log(error);

    }
  };


  // DELETE
  const deleteEmployee = async (id) => {

    try {

      await api.delete(`/employees/${id}`);

      alert("Deleted Successfully");

      fetchEmployees();

    } catch (error) {

      console.log(error);

    }
  };


  return (
    <div>

      <h1>Employees</h1>
      <select
    value={department}
    onChange={(e) => setDepartment(e.target.value)}
>

    <option value="">
        All Departments
    </option>

    <option value="IT">
        IT
    </option>

    <option value="HR">
        HR
    </option>

    <option value="Finance">
        Finance
    </option>

    <option value="Civil">
        Civil
    </option>

</select>

<br /><br />

      {
        employees.map((emp) => (

          <div key={emp._id}>

            <h3>{emp.emp_name}</h3>

            <p>{emp.email}</p>

            <p>{emp.contact}</p>

            <p>{emp.department}</p>

            <p>{emp.salary}</p>


            {/* Edit Button */}
            <Link to={`/edit/${emp._id}`}>
              <button>Edit</button>
            </Link>

            {" "}


            {/* Delete Button */}
            <button
              onClick={() => deleteEmployee(emp._id)}
            >
              Delete
            </button>

            <hr />

          </div>

        ))
      }

    </div>
  );
};

export default Employee;