import React, { useEffect, useState } from 'react';
import api from '../api/axios.js';
import { Link } from 'react-router';
import { toast } from 'react-toastify';

const Employee = () => {

  const [employees, setEmployees] = useState([]);
  const [department, setDepartment] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchEmployees();
  }, [department]);


  const fetchEmployees = async () => {
    setLoading(true);
    try {
      const response = await api.get(`/employees?department=${department}`);
      setEmployees(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch employees");
    } finally {
      setLoading(false);
    }
  };

  // DELETE
  const deleteEmployee = async (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      try {
        await api.delete(`/employees/${id}`);
        toast.success("Employee deleted successfully!");
        fetchEmployees();
      } catch (error) {
        console.log(error);
        toast.error("Failed to delete employee");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="section-title text-5xl md:text-6xl">
            👥 Employee <span className="text-gradient">Directory</span>
          </h1>
          <p className="text-xl text-slate-600 mt-4">Manage and view all employees in your organization</p>
        </div>

        {/* Filter Section */}
        <div className="card-premium-lg p-6 md:p-8 mb-12 animate-slide-down">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex-1">
              <label className="block text-sm font-semibold text-slate-700 mb-3">Filter by Department</label>
              <select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="input-premium w-full md:w-72 bg-white border-2 border-slate-200 rounded-xl px-4 py-3 font-semibold text-slate-900 cursor-pointer"
              >
                <option value="">All Departments</option>
                <option value="IT">🖥️ IT</option>
                <option value="HR">👔 HR</option>
                <option value="Finance">💰 Finance</option>
                <option value="Civil">🏗️ Civil</option>
              </select>
            </div>
            <div className="flex items-end gap-3">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl px-6 py-3 text-white font-semibold">
                {employees.length} {employees.length === 1 ? 'Employee' : 'Employees'}
              </div>
            </div>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-24">
            <div className="flex flex-col items-center gap-4">
              <span className="loading loading-spinner loading-lg" style={{ color: '#3B82F6' }}></span>
              <p className="text-slate-600 font-semibold">Loading employees...</p>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!loading && employees.length === 0 && (
          <div className="card-premium-lg p-12 text-center">
            <div className="text-7xl mb-6">🔍</div>
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-3">No Employees Found</h2>
            <p className="text-lg text-slate-600 mb-8">There are no employees in the {department ? `"${department}"` : "selected"} department yet.</p>
            <Link to="/addemployee">
              <button className="btn btn-premium px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-lg font-semibold hover:shadow-glow">
                <span className="text-2xl">➕</span> Add First Employee
              </button>
            </Link>
          </div>
        )}

        {/* Employees Grid */}
        {!loading && employees.length > 0 && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {employees.map((emp, idx) => (
                <div 
                  key={emp._id} 
                  className="card-premium-lg overflow-hidden hover:shadow-large smooth-transition animate-scale-in group"
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  {/* Card Header with Gradient */}
                  <div className="h-2 bg-gradient-to-r from-blue-600 to-cyan-500"></div>
                  
                  <div className="p-6 md:p-8">
                    {/* Employee Name & Department */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900 line-clamp-2 group-hover:text-blue-600 smooth-transition">
                          {emp.emp_name}
                        </h2>
                        <div className="mt-3 inline-block">
                          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold px-4 py-2 rounded-full">
                            {emp.department}
                          </span>
                        </div>
                      </div>
                      <div className="text-4xl ml-3">👤</div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-slate-200 to-transparent my-6"></div>

                    {/* Employee Details */}
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg hover:bg-blue-50 smooth-transition">
                        <span className="text-2xl">✉️</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Email</p>
                          <p className="text-sm font-semibold text-slate-900 break-all line-clamp-1">{emp.email}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg hover:bg-blue-50 smooth-transition">
                        <span className="text-2xl">📞</span>
                        <div className="flex-1">
                          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Contact</p>
                          <p className="text-sm font-bold text-slate-900">{emp.contact}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
                        <span className="text-2xl">💰</span>
                        <div className="flex-1">
                          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Monthly Salary</p>
                          <p className="text-lg font-bold text-blue-600">₹{emp.salary}</p>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Link to={`/edit/${emp._id}`} className="flex-1">
                        <button className="btn btn-premium w-full px-4 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg">
                          ✏️ Edit
                        </button>
                      </Link>
                      <button
                        onClick={() => deleteEmployee(emp._id)}
                        className="btn btn-premium px-4 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Back to Home */}
            <div className="flex justify-center gap-4">
              <Link to="/">
                <button className="btn btn-premium px-8 py-3 border-2 border-slate-300 text-slate-900 font-semibold hover:bg-slate-100">
                  ← Back to Home
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Employee;