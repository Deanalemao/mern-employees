import React from 'react'
import { useState} from 'react'
import { Navigate, useNavigate } from 'react-router';
import api from "../api/axios.js";

const InsertEmployee = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
  emp_name :"",
  email: "",
  contact: "",
  department: "",
  salary: "",
 });

 //handle formdata
 const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name] : e.target.value,
  });
 };

 const handleSubmit = async(e) => {
  
  e.preventDefault();

  try {
    const response = await api.post("/employees",formData);
    console.log(response.data);
    alert("employee added successfully");
    navigate("/employees");
  } catch (error) {
    console.log(error);
    alert("error adding a employee");
  }
 }
  
  return (

    <div>
      <h1>Add employees</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="emp_name"
            placeholder="enter employee name"
            value={formData.emp_name}
            onChange={handleChange}
          />
        </div>
        <br/>

        <div>
          <input
            type="email"
            name="email"
            placeholder="enter employee email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <br/>

        <div>
          <input
            type="number"
            name="contact"
            placeholder="enter employee contact"
            value={formData.contact}
            onChange={handleChange}
          />
        </div>
        <br/>

        <div>
          <input
            type="text"
            name="department"
            placeholder="enter employee department"
            value={formData.department}
            onChange={handleChange}
          />
        </div>
        <br/>
        <div>
          <input
            type="number"
            name="salary"
            placeholder="enter employee salary"
            value={formData.salary}
            onChange={handleChange}
          />
        </div>
        <br/>
        <button type="submit">add employee</button>
        
      </form>
    </div>
    
  )
};

export default InsertEmployee