import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import api from "../api/axios.js";
import { toast } from 'react-toastify';
import DatePicker from '../components/DatePicker.jsx';
import { departments, formFieldClass, isValidAge, isValidEmail, isValidName, isValidPhone, minimumAge } from '../utils/formHelpers.js';

const InsertEmployee = () => {
  const navigate = useNavigate();
  const today = new Date().toISOString().slice(0, 10);
  const [formData, setFormData] = useState({
    emp_name: "",
    email: "",
    age: "",
    contact: "",
    department: "",
    doj: "",
    salary: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValidName(formData.emp_name)) {
      toast.error("Name must be at least 3 letters and contain only letters and spaces.");
      return;
    }
    if (!isValidEmail(formData.email)) {
      toast.error("Please enter a valid Gmail address ending with @gmail.com.");
      return;
    }
    if (!isValidPhone(formData.contact)) {
      toast.error("Phone number must be exactly 10 digits.");
      return;
    }
    if (!formData.department.trim()) {
      toast.error("Please select a department");
      return;
    }
    if (!isValidAge(formData.age)) {
      toast.error(`Age must be ${minimumAge} or older`);
      return;
    }
    if (!formData.doj.trim()) {
      toast.error("Please enter the date of joining");
      return;
    }
    if (!String(formData.salary).trim()) {
      toast.error("Please enter salary");
      return;
    }

    setLoading(true);
    try {
      await api.post("/employees", {
        ...formData,
        age: Number(formData.age),
        contact: Number(formData.contact),
        salary: Number(formData.salary),
      });
      toast.success("Employee added successfully! 🎉");
      navigate("/employees");
    } catch (error) {
      console.log(error);
      toast.error("Failed to add employee. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 opacity-95" />
        <div className="absolute left-0 top-24 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-0 top-12 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-10 shadow-2xl shadow-slate-950/30 backdrop-blur-xl text-center">
            <div className="inline-flex items-center justify-center rounded-full bg-slate-950/90 p-5 shadow-xl shadow-cyan-500/10 text-6xl text-cyan-300 mb-6">
              ➕
            </div>
            <h1 className="text-4xl font-semibold text-white">Add New Employee</h1>
            <p className="mt-4 text-lg leading-8 text-slate-400">
              Fill in the details below to register a new team member.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-12">
        <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-10 shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
          <form onSubmit={handleSubmit} className="grid gap-6">
            <div>
              <label className="block text-sm font-semibold text-slate-200 mb-2">Full Name</label>
              <input
                type="text"
                name="emp_name"
                placeholder="John Doe"
                value={formData.emp_name}
                onChange={handleChange}
                className={formFieldClass}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-200 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="john@gmail.com"
                value={formData.email}
                onChange={handleChange}
                className={formFieldClass}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-200 mb-2">Contact Number</label>
              <input
                type="tel"
                name="contact"
                placeholder="9876543210"
                value={formData.contact}
                onChange={handleChange}
                className={formFieldClass}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-200 mb-2">Age</label>
              <input
                type="number"
                name="age"
                min="0"
                placeholder="29"
                value={formData.age}
                onChange={handleChange}
                className={formFieldClass}
              />
            </div>
            <div className="md:col-span-2">
              <DatePicker
                label="Date of Joining"
                name="doj"
                value={formData.doj}
                onChange={(name, value) => setFormData({ ...formData, [name]: value })}
                min="1900-01-01"
                max={today}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-200 mb-2">Department</label>
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                className={formFieldClass}
              >
                <option value="" className="bg-slate-950 text-slate-100">Select a Department</option>
                {departments.map((dept) => (
                  <option key={dept} value={dept} className="bg-slate-950 text-slate-100">
                    {dept}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-200 mb-2">Monthly Salary (₹)</label>
              <input
                type="number"
                name="salary"
                placeholder="50000"
                value={formData.salary}
                onChange={handleChange}
                className={formFieldClass}
              />
            </div>

            <div className="md:col-span-2 grid gap-4 sm:grid-cols-2">
              <button
                type="submit"
                disabled={loading}
                className="rounded-3xl bg-cyan-400 px-6 py-4 text-base font-semibold text-slate-950 shadow-xl shadow-cyan-500/30 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? 'Processing...' : 'Add Employee'}
              </button>
              <button
                type="button"
                onClick={() => navigate('/employees')}
                className="rounded-3xl border border-white/10 bg-white/5 px-6 py-4 text-base font-semibold text-slate-100 transition hover:bg-white/10"
              >
                Cancel
              </button>
            </div>

            <div className="md:col-span-2 rounded-3xl border border-cyan-500/10 bg-cyan-500/10 p-6 text-slate-100">
              <h4 className="font-semibold text-white">Need help?</h4>
              <p className="mt-2 text-sm text-slate-300">
                Fill every field and use a valid Gmail address to create a new employee record.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InsertEmployee;