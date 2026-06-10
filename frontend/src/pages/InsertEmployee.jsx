import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router';
import api from "../api/axios.js";
import { toast } from 'react-toastify';

const InsertEmployee = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    emp_name: "",
    email: "",
    contact: "",
    department: "",
    salary: "",
  });

  const [loading, setLoading] = useState(false);

  //handle formdata
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const isValidName = (name) => {
    const trimmed = String(name).trim();
    return trimmed.length >= 3 && /^[A-Za-z ]+$/.test(trimmed);
  };

  const isValidPhone = (phone) => {
    const digits = String(phone).replace(/\D/g, '');
    return digits.length === 10;
  };

  const isValidEmail = (email) => {
    const trimmed = String(email).trim().toLowerCase();
    return /^[a-z0-9._%+-]+@gmail\.com$/.test(trimmed);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
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
    if (!String(formData.salary).trim()) {
      toast.error("Please enter salary");
      return;
    }

    setLoading(true);
    try {
        const response = await api.post("/employees", {
          ...formData,
          contact: Number(formData.contact),
          salary: Number(formData.salary),
        });
      console.log(response.data);
      toast.success("Employee added successfully! 🎉");
      navigate("/employees");
    } catch (error) {
      console.log(error);
      toast.error("Failed to add employee. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-block mb-6 relative">
            <div className="absolute inset-0 bg-green-500/10 rounded-full blur-lg"></div>
            <div className="relative bg-white rounded-full p-4">
              <span className="text-5xl">➕</span>
            </div>
          </div>
          <h1 className="section-title">Add New Employee</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Fill in the details below to register a new team member</p>
        </div>

        {/* Form Card */}
        <div className="card-premium-lg p-8 md:p-12 animate-scale-in">
          <form onSubmit={handleSubmit} className="space-y-8">

            {/* Employee Name */}
            <div className="form-control">
              <label className="label pb-2">
                <span className="label-text font-semibold text-slate-900 text-lg">👤 Full Name</span>
                <span className="label-text-alt text-red-500 font-bold">*</span>
              </label>
              <input
                type="text"
                name="emp_name"
                placeholder="John Doe"
                value={formData.emp_name}
                onChange={handleChange}
                className="input-premium bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
              />
            </div>

            {/* Email */}
            <div className="form-control">
              <label className="label pb-2">
                <span className="label-text font-semibold text-slate-900 text-lg">✉️ Email Address</span>
                <span className="label-text-alt text-red-500 font-bold">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="john@company.com"
                value={formData.email}
                onChange={handleChange}
                className="input-premium bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
              />
            </div>

            {/* Contact */}
            <div className="form-control">
              <label className="label pb-2">
                <span className="label-text font-semibold text-slate-900 text-lg">📞 Contact Number</span>
                <span className="label-text-alt text-red-500 font-bold">*</span>
              </label>
              <input
                type="number"
                name="contact"
                placeholder="9876543210"
                value={formData.contact}
                onChange={handleChange}
                className="input-premium bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
              />
            </div>

            {/* Department */}
            <div className="form-control">
              <label className="label pb-2">
                <span className="label-text font-semibold text-slate-900 text-lg">🏢 Department</span>
                <span className="label-text-alt text-red-500 font-bold">*</span>
              </label>
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="input-premium bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-lg cursor-pointer focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
              >
                <option value="">Select a Department</option>
                <option value="IT">🖥️ IT</option>
                <option value="HR">👔 HR</option>
                <option value="Finance">💰 Finance</option>
                <option value="Civil">🏗️ Civil</option>
              </select>
            </div>

            {/* Salary */}
            <div className="form-control">
              <label className="label pb-2">
                <span className="label-text font-semibold text-slate-900 text-lg">💰 Monthly Salary (₹)</span>
                <span className="label-text-alt text-red-500 font-bold">*</span>
              </label>
              <input
                type="number"
                name="salary"
                placeholder="50000"
                value={formData.salary}
                onChange={handleChange}
                className="input-premium bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
              />
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-slate-200 to-transparent my-6"></div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 btn btn-premium px-6 py-4 bg-gradient-to-r from-green-600 to-emerald-500 text-white text-lg font-semibold hover:shadow-glow disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <span className="loading loading-spinner loading-sm"></span>
                    Processing...
                  </>
                ) : (
                  <>
                    <span className="text-2xl">➕</span> Add Employee
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={() => navigate("/employees")}
                className="flex-1 btn btn-premium px-6 py-4 border-2 border-slate-300 text-slate-900 text-lg font-semibold hover:bg-slate-100"
              >
                ← Cancel
              </button>
            </div>

            {/* Info Alert */}
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6 flex gap-4">
              <span className="text-2xl">ℹ️</span>
              <div>
                <h4 className="font-semibold text-blue-900 mb-1">Fill in all fields</h4>
                <p className="text-sm text-blue-700">All fields marked with <span className="font-bold text-red-500">*</span> are required to create a new employee record.</p>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
};

export default InsertEmployee