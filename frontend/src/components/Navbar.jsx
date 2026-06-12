import React, { useState } from 'react'
import { Link } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 transition hover:opacity-90">
            <div className="relative flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-xl shadow-cyan-500/20">
              <span className="text-xl font-black">EH</span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-lg font-semibold text-white">Employee Hub</span>
              <span className="text-xs text-slate-400 uppercase tracking-[0.24em]">Management System</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            <Link to="/" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:bg-white/10">
              <svg className="h-4 w-4 text-cyan-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9.5L12 3l9 6.5v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-10z" /></svg>
              Home
            </Link>
            <Link to="/employees" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:bg-white/10">
              <svg className="h-4 w-4 text-cyan-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 20h5v-2a4 4 0 0 0-4-4h-1"/><path d="M9 20H4v-2a4 4 0 0 1 4-4h1"/><circle cx="12" cy="7" r="4"/></svg>
              Employees
            </Link>
            <Link to="/addemployee" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:shadow-xl">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14" /></svg>
              Add Employee
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden rounded-full border border-white/10 bg-white/10 p-2 text-slate-100 transition hover:bg-white/15"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 pt-2 space-y-2">
            <Link to="/" onClick={() => setIsOpen(false)} className="block rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 font-semibold transition hover:bg-white/10">
              Home
            </Link>
            <Link to="/employees" onClick={() => setIsOpen(false)} className="block rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 font-semibold transition hover:bg-white/10">
              Employees
            </Link>
            <Link to="/addemployee" onClick={() => setIsOpen(false)} className="block rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-3 text-white font-semibold transition hover:shadow-xl">
              Add Employee
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar