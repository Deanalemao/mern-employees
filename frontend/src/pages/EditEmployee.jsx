import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import api from '../api/axios.js';
import { toast } from 'react-toastify';

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

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);


  // Fetch Employee By ID
  useEffect(() => {

    fetchEmployee();

  }, []);


  const fetchEmployee = async () => {

    try {

      const response = await api.get(`/employees/${id}`);

      setFormData(response.data);
      setLoading(false);

    } catch (error) {

      console.log(error);
      toast.error("Failed to load employee details");
      setLoading(false);

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

    // Validation
    if (!formData.emp_name.trim()) {
      toast.error("Please enter employee name");
      return;
    }
    if (!formData.email.trim()) {
      toast.error("Please enter email address");
      return;
    }
    if (!formData.contact.trim()) {
      toast.error("Please enter contact number");
      return;
    }
    if (!formData.department.trim()) {
      toast.error("Please select a department");
      return;
    }
    if (!formData.salary.trim()) {
      toast.error("Please enter salary");
      return;
    }

    setSubmitting(true);
    try {

      await api.put(
        `/employees/${id}`,
        formData
      );

      toast.success("Employee updated successfully! ✅");

      navigate("/employees");

    } catch (error) {

      console.log(error);
      toast.error("Failed to update employee");

    } finally {
      setSubmitting(false);
    }
  };


  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <span className="loading loading-spinner loading-lg" style={{ color: '#3B82F6' }}></span>
          <p className="text-slate-700 mt-6 font-semibold">Loading employee details...</p>
        </div>
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-block mb-6 relative">
            <div className="absolute inset-0 bg-amber-500/10 rounded-full blur-lg"></div>
            <div className="relative bg-white rounded-full p-4">
              <span className="text-5xl">✏️</span>
            </div>
          </div>
          <h1 className="section-title">Edit Employee</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Update employee information and save changes</p>
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
                value={formData.emp_name}
                onChange={handleChange}
                className="input-premium bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
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
                value={formData.email}
                onChange={handleChange}
                className="input-premium bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
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
                value={formData.contact}
                onChange={handleChange}
                className="input-premium bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
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
                value={formData.salary}
                onChange={handleChange}
                className="input-premium bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
              />
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-slate-200 to-transparent my-6"></div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                disabled={submitting}
                className="flex-1 btn btn-premium px-6 py-4 bg-gradient-to-r from-amber-600 to-orange-500 text-white text-lg font-semibold hover:shadow-glow disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <>
                    <span className="loading loading-spinner loading-sm"></span>
                    Updating...
                  </>
                ) : (
                  <>
                    <span className="text-2xl">✏️</span> Update Employee
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={() => navigate("/employees")}
                className="flex-1 btn btn-premium px-6 py-4 border-2 border-slate-300 text-slate-900 text-lg font-semibold hover:bg-slate-100"
              >
                ← Back to Employees
              </button>
            </div>

            {/* Info Alert */}
            <div className="bg-amber-50 border-l-4 border-amber-600 rounded-lg p-6 flex gap-4">
              <span className="text-2xl">📝</span>
              <div>
                <h4 className="font-semibold text-amber-900 mb-1">Make your changes</h4>
                <p className="text-sm text-amber-700">Edit the fields and click "Update Employee" to save your changes.</p>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default EditEmployee