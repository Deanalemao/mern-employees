import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import api from '../api/axios.js';

const EditEmployee = () => {

   const { id } = useParams();

  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    emp_name: "",
    email: "",
    contact: "",
    department: "",
    salary: "",
  });


  // Fetch Employee By ID
  useEffect(() => {

    fetchEmployee();

  }, []);


  const fetchEmployee = async () => {

    try {

      const response = await api.get(`/employees/${id}`);

      setFormData(response.data);

    } catch (error) {

      console.log(error);

    }
  };


  // Handle Input Change
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };


  // Update Employee
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await api.put(
        `/employees/${id}`,
        formData
      );

      alert("Employee Updated Successfully");

      navigate("/employees");

    } catch (error) {

      console.log(error);

    }
  };


  return (
    <div>

      <h1>Edit Employee</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="emp_name"
          value={formData.emp_name}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="number"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="department"
          value={formData.department}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="number"
          name="salary"
          value={formData.salary}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          Update Employee
        </button>

      </form>
      </div>
  );
}

export default EditEmployee