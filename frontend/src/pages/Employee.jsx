import React, { useEffect, useState } from 'react';
import api from '../api/axios.js';
import { Link } from 'react-router';
import { toast } from 'react-toastify';

const Employee = () => {
  const [employees, setEmployees] = useState([]);
  const [department, setDepartment] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchEmployees();
  }, [department]);

  const filteredEmployees = employees.filter((emp) => {
    const query = searchQuery.toLowerCase();
    return (
      emp.emp_name.toLowerCase().includes(query) ||
      emp.email.toLowerCase().includes(query) ||
      emp.contact.toString().includes(query) ||
      emp.department.toLowerCase().includes(query)
    );
  });

  const fetchEmployees = async () => {
    setLoading(true);
    try {
      const response = await api.get(`/employees?department=${department}`);
      setEmployees(response.data);
    } catch (error) {
      console.log(error);
      toast.error('Failed to fetch employees');
    } finally {
      setLoading(false);
    }
  };

  const deleteEmployee = async (id) => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      try {
        await api.delete(`/employees/${id}`);
        toast.success('Employee deleted successfully!');
        fetchEmployees();
      } catch (error) {
        console.log(error);
        toast.error('Failed to delete employee');
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden pb-24">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 opacity-95" />
        <div className="absolute left-[-3rem] top-16 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-[-4rem] top-24 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-200">
                Employee Directory
              </span>
              <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                Find and manage employees instantly with powerful search
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                Search by name, email, contact number, or department. Filter by department and instantly find the employee you're looking for.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link to="/addemployee">
                  <button className="rounded-full bg-cyan-400 px-8 py-4 text-base font-semibold text-slate-950 shadow-xl shadow-cyan-500/30 transition hover:bg-cyan-300">
                    Add Employee
                  </button>
                </Link>
                <div className="rounded-full border border-white/10 bg-slate-950/60 px-6 py-4 text-sm text-slate-200">
                  Showing {employees.length} {employees.length === 1 ? 'employee' : 'employees'}
                </div>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
              <div className="text-sm uppercase tracking-[0.32em] text-cyan-300">Quick insights</div>
              <h2 className="mt-4 text-3xl font-semibold text-white">Search & Filter</h2>
              <p className="mt-4 text-slate-400">Use the search bar to find employees by any detail, or filter by department.</p>
              <div className="mt-8 grid gap-4">
                <div className="rounded-3xl bg-slate-950/70 p-5 border border-white/10">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Total employees</p>
                  <p className="mt-2 text-lg text-white">{employees.length}</p>
                </div>
                <div className="rounded-3xl bg-slate-950/70 p-5 border border-white/10">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Results found</p>
                  <p className="mt-2 text-lg text-cyan-300">{filteredEmployees.length}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-12">
        <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/30 backdrop-blur-xl mb-10">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-2">Search Employees</h2>
              <p className="text-sm text-slate-400">Search by name, email, contact, or department</p>
              <input
                type="text"
                placeholder="🔍 Search employees..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full mt-4 rounded-3xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-slate-100 placeholder-slate-500 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
            </div>

            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="flex-1">
                <label className="block text-sm font-semibold text-slate-200 mb-2">Filter by Department</label>
                <select
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className="w-full rounded-3xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                >
                  <option className="bg-slate-950 text-slate-100" value="">All Departments</option>
                  <option className="bg-slate-950 text-slate-100" value="IT">IT</option>
                  <option className="bg-slate-950 text-slate-100" value="HR">HR</option>
                  <option className="bg-slate-950 text-slate-100" value="Finance">Finance</option>
                  <option className="bg-slate-950 text-slate-100" value="Civil">Civil</option>
                  <option className="bg-slate-950 text-slate-100" value="Marketing">Marketing</option>
                  <option className="bg-slate-950 text-slate-100" value="Sales">Sales</option>
                  <option className="bg-slate-950 text-slate-100" value="Operations">Operations</option>
                  <option className="bg-slate-950 text-slate-100" value="Support">Support</option>
                  <option className="bg-slate-950 text-slate-100" value="Design">Design</option>
                </select>
              </div>
              <div className="rounded-3xl border border-slate-700 bg-slate-950/70 px-6 py-3 text-center">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Results</p>
                <p className="mt-1 text-2xl font-bold text-cyan-300">{filteredEmployees.length}</p>
              </div>
            </div>
          </div>
        </div>

        {loading && (
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-16 text-center shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
            <div className="mx-auto h-12 w-12 rounded-full border-4 border-cyan-400 border-t-transparent animate-spin" />
            <p className="mt-6 text-slate-300">Loading employees...</p>
          </div>
        )}

        {!loading && employees.length === 0 && (
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-16 text-center shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-slate-950/80 text-5xl text-cyan-300">�</div>
            <h2 className="text-3xl font-semibold text-white">No employees yet</h2>
            <p className="mt-4 text-slate-400">Add your first employee to get started.</p>
            <div className="mt-8">
              <Link to="/addemployee">
                <button className="rounded-full bg-cyan-400 px-8 py-4 text-base font-semibold text-slate-950 shadow-xl shadow-cyan-500/30 transition hover:bg-cyan-300">
                  Add First Employee
                </button>
              </Link>
            </div>
          </div>
        )}

        {!loading && employees.length > 0 && filteredEmployees.length === 0 && (
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-16 text-center shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-slate-950/80 text-5xl text-cyan-300">🔍</div>
            <h2 className="text-3xl font-semibold text-white">No employees found</h2>
            <p className="mt-4 text-slate-400">Try adjusting your search or filter criteria.</p>
          </div>
        )}

        {!loading && filteredEmployees.length > 0 && (
          <>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
              {filteredEmployees.map((emp, idx) => (
                <div
                  key={emp._id}
                  className="rounded-[2rem] border border-white/10 bg-slate-900/80 shadow-2xl shadow-slate-950/30 overflow-hidden transition hover:-translate-y-1"
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  <div className="h-2 bg-gradient-to-r from-blue-600 to-cyan-500" />
                  <div className="p-6 md:p-8">
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <div className="min-w-0">
                        <h2 className="text-2xl font-semibold text-white truncate">{emp.emp_name}</h2>
                        <span className="mt-3 inline-flex rounded-full bg-cyan-500/15 px-3 py-1 text-sm font-semibold text-cyan-200">
                          {emp.department}
                        </span>
                      </div>
                      <div className="text-4xl">👤</div>
                    </div>
                    <div className="space-y-4 mb-8">
                      <div className="rounded-3xl bg-slate-950/90 p-4">
                        <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Email</p>
                        <p className="mt-2 text-sm text-slate-200 truncate">{emp.email}</p>
                      </div>
                      <div className="rounded-3xl bg-slate-950/90 p-4">
                        <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Contact</p>
                        <p className="mt-2 text-sm text-slate-200">{emp.contact}</p>
                      </div>
                      <div className="rounded-3xl bg-slate-950/90 p-4 border border-slate-800">
                        <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Monthly Salary</p>
                        <p className="mt-2 text-lg font-semibold text-cyan-200">₹{emp.salary}</p>
                      </div>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <Link to={`/edit/${emp._id}`}>
                        <button className="w-full rounded-3xl bg-amber-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400">
                          Edit Employee
                        </button>
                      </Link>
                      <button
                        onClick={() => deleteEmployee(emp._id)}
                        className="w-full rounded-3xl bg-red-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-400"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <Link to="/">
                <button className="rounded-full border border-white/10 bg-white/5 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                  ← Back to Home
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Employee;