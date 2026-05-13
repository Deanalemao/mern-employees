import React, { useState } from 'react'
import { Link } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-[0_2px_8px_rgba(0,0,0,0.08)] backdrop-blur-xl bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-all duration-300 ease-out">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl blur-md opacity-75"></div>
              <div className="relative bg-white rounded-xl p-2 shadow-soft">
                <span className="text-2xl font-display font-bold text-gradient">EH</span>
              </div>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-xl font-display font-bold text-slate-900">Employee Hub</span>
              <span className="text-xs text-slate-500 font-medium">Management System</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <Link to="/" className="px-4 py-2 rounded-lg text-slate-700 font-semibold hover:bg-slate-100 transition-all duration-300 ease-out flex items-center gap-2">
              <span className="text-lg">🏠</span> Home
            </Link>
            <Link to="/employees" className="px-4 py-2 rounded-lg text-slate-700 font-semibold hover:bg-slate-100 transition-all duration-300 ease-out flex items-center gap-2">
              <span className="text-lg">👥</span> Employees
            </Link>
            <Link to="/addemployee" className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-[0_0_24px_rgba(59,130,246,0.15)] transition-all duration-300 ease-out flex items-center gap-2 ml-2">
              <span className="text-lg">➕</span> Add Employee
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-all duration-300 ease-out"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 space-y-2 animate-slide-down">
            <Link to="/" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-lg text-slate-700 font-semibold hover:bg-slate-100 smooth-transition">
              🏠 Home
            </Link>
            <Link to="/employees" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-lg text-slate-700 font-semibold hover:bg-slate-100 smooth-transition">
              👥 Employees
            </Link>
            <Link to="/addemployee" onClick={() => setIsOpen(false)} className="block px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-glow smooth-transition">
              ➕ Add Employee
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar