import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import api from '../api/axios.js';
import { toast } from 'react-toastify';
import DatePicker from '../components/DatePicker.jsx';
import { departments, formFieldClass, isValidAge, isValidEmail, isValidName, isValidPhone, minimumAge } from '../utils/formHelpers.js';

const EditEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const today = new Date().toISOString().slice(0, 10);
  const [formData, setFormData] = useState({
    emp_name: '',
    email: '',
    age: '',
    contact: '',
    department: '',
    doj: '',
    salary: '',
  });
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchEmployee();
  }, []);

  const fetchEmployee = async () => {
    try {
      const response = await api.get(`/employees/${id}`);
      setFormData(response.data);
    } catch (error) {
      console.log(error);
      toast.error('Failed to load employee details');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValidName(formData.emp_name)) {
      toast.error('Name must be at least 3 letters and contain only letters and spaces.');
      return;
    }
    if (!isValidEmail(formData.email)) {
      toast.error('Please enter a valid Gmail address ending with @gmail.com.');
      return;
    }
    if (!isValidPhone(formData.contact)) {
      toast.error('Phone number must be exactly 10 digits.');
      return;
    }
    if (!isValidAge(formData.age)) {
      toast.error(`Age must be ${minimumAge} or older`);
      return;
    }
    if (!formData.doj.trim()) {
      toast.error('Please enter the date of joining');
      return;
    }
    if (!formData.department.trim()) {
      toast.error('Please select a department');
      return;
    }
    if (!String(formData.salary).trim()) {
      toast.error('Please enter salary');
      return;
    }

    setSubmitting(true);
    try {
      await api.put(`/employees/${id}`, {
        ...formData,
        age: Number(formData.age),
        contact: Number(formData.contact),
        salary: Number(formData.salary),
      });
      toast.success('Employee updated successfully! ✅');
      navigate('/employees');
    } catch (error) {
      console.log(error);
      toast.error('Failed to update employee');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center">
        <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-16 shadow-2xl shadow-slate-950/30 backdrop-blur-xl text-center">
          <div className="mx-auto h-12 w-12 rounded-full border-4 border-cyan-400 border-t-transparent animate-spin" />
          <p className="mt-6 text-slate-300">Loading employee details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 opacity-95" />
        <div className="absolute left-0 top-24 h-64 w-64 rounded-full bg-amber-500/20 blur-3xl" />
        <div className="absolute right-0 top-14 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-10 shadow-2xl shadow-slate-950/30 backdrop-blur-xl text-center">
            <div className="inline-flex items-center justify-center rounded-full bg-slate-950/90 p-5 shadow-xl shadow-amber-500/10 text-6xl text-amber-300 mb-6">
              ✏️
            </div>
            <h1 className="text-4xl font-semibold text-white">Edit Employee</h1>
            <p className="mt-4 text-lg leading-8 text-slate-400">Update employee information and save changes with confidence.</p>
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
                value={formData.email}
                onChange={handleChange}
                className={formFieldClass}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-200 mb-2">Age</label>
              <input
                type="number"
                name="age"
                min={minimumAge}
                value={formData.age}
                onChange={handleChange}
                className={formFieldClass}
              />
            </div>
            <div className="md:col-span-2">
              <DatePicker
                label="Date of Joining"
                name="doj"
                value={formData.doj ? formData.doj.slice(0, 10) : ''}
                onChange={(name, value) => setFormData({ ...formData, [name]: value })}
                min="1900-01-01"
                max={today}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-200 mb-2">Contact Number</label>
              <input
                type="tel"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                className={formFieldClass}
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
                value={formData.salary}
                onChange={handleChange}
                className={formFieldClass}
              />
            </div>
            <div className="md:col-span-2 grid gap-4 sm:grid-cols-2">
              <button
                type="submit"
                disabled={submitting}
                className="rounded-3xl bg-amber-500 px-6 py-4 text-base font-semibold text-slate-950 shadow-xl shadow-amber-500/30 transition hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? 'Updating...' : 'Update Employee'}
              </button>
              <button
                type="button"
                onClick={() => navigate('/employees')}
                className="rounded-3xl border border-white/10 bg-white/5 px-6 py-4 text-base font-semibold text-slate-100 transition hover:bg-white/10"
              >
                Back to Employees
              </button>
            </div>
            <div className="md:col-span-2 rounded-3xl border border-amber-500/10 bg-amber-500/10 p-6 text-slate-100">
              <h4 className="font-semibold text-white">Save changes safely</h4>
              <p className="mt-2 text-sm text-slate-200">Update employee details and click the button above when you are ready.</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default EditEmployee