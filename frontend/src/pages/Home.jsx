import React from 'react'
import { Link } from 'react-router'
import employeeBg from '../res/img/employee man.png'

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(15,23,42,0.78), rgba(15,23,42,0.55)), url(${employeeBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'scroll',
        }}
      >
        <div className="absolute inset-0 bg-slate-950/40"></div>
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-cyan-500/25 blur-3xl"></div>
        <div className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl"></div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] items-center">
            <div className="space-y-8">
              <span className="inline-flex items-center gap-3 rounded-full border border-cyan-300/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-200 ring-1 ring-cyan-300/20">
                <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
                Modern employee management
              </span>

              <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Empower your workforce with a beautiful, all-in-one employee hub
              </h1>

              <p className="max-w-2xl text-lg leading-8 text-slate-200">
                Simplify hiring, onboarding, and people operations with one polished dashboard that keeps employee data organized, secure, and easy to act on.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link to="/employees">
                  <button className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-8 py-4 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:-translate-y-0.5 hover:bg-cyan-300">
                    View Employees
                  </button>
                </Link>
                <Link to="/addemployee">
                  <button className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/20">
                    Add Employee
                  </button>
                </Link>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5 shadow-xl shadow-slate-950/20 backdrop-blur-xl">
                  <p className="text-3xl font-semibold text-white">250+</p>
                  <p className="mt-2 text-sm text-slate-400">Employees onboarded</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5 shadow-xl shadow-slate-950/20 backdrop-blur-xl">
                  <p className="text-3xl font-semibold text-white">99.9%</p>
                  <p className="mt-2 text-sm text-slate-400">System uptime</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5 shadow-xl shadow-slate-950/20 backdrop-blur-xl">
                  <p className="text-3xl font-semibold text-white">Fast</p>
                  <p className="mt-2 text-sm text-slate-400">Instant updates</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
              <div className="mb-8">
                <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">People-first productivity</p>
                <h2 className="mt-4 text-3xl font-semibold text-white">A smarter employee experience</h2>
              </div>

              <div className="space-y-5">
                <div className="rounded-3xl bg-slate-950/70 p-5 ring-1 ring-white/10">
                  <p className="font-semibold text-white">Centralized records</p>
                  <p className="mt-2 text-sm text-slate-400">All employee profiles and history in one elegant place.</p>
                </div>
                <div className="rounded-3xl bg-slate-950/70 p-5 ring-1 ring-white/10">
                  <p className="font-semibold text-white">Instant updates</p>
                  <p className="mt-2 text-sm text-slate-400">Edit profiles, roles, and status with speed and confidence.</p>
                </div>
                <div className="rounded-3xl bg-slate-950/70 p-5 ring-1 ring-white/10">
                  <p className="font-semibold text-white">Secure workflows</p>
                  <p className="mt-2 text-sm text-slate-400">Keep employee data polished, private, and easy to manage.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Features</p>
            <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Everything your team needs to stay organized</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-400">
              A modern employee management system built around speed, clarity, and trust.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/30 transition hover:-translate-y-1 hover:shadow-2xl">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-400 text-3xl shadow-lg shadow-cyan-500/20">
                📊
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Employee Directory</h3>
              <p className="text-slate-400">Search, filter, and manage employee profiles with intuitive controls.</p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/30 transition hover:-translate-y-1 hover:shadow-2xl">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 text-3xl shadow-lg shadow-cyan-500/20">
                ➕
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Fast Onboarding</h3>
              <p className="text-slate-400">Add employees quickly with clean, guided forms built for productivity.</p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/30 transition hover:-translate-y-1 hover:shadow-2xl">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-400 text-3xl shadow-lg shadow-cyan-500/20">
                ⚙️
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Smart Management</h3>
              <p className="text-slate-400">Edit, update, and organize your workforce with secure, polished workflows.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_0.9fr] items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Why choose Employee Hub?</p>
              <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">A better experience for employees and admins alike</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                Built for teams that want beautiful, reliable workflows. Keep employee data neat, actionable, and easy to access across every step.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white shadow-xl shadow-slate-950/20">
                  <p className="text-3xl">⚡</p>
                  <h3 className="mt-4 text-lg font-semibold">Responsive speed</h3>
                  <p className="mt-2 text-slate-400">Fast interactions keep your team moving without slowdown.</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white shadow-xl shadow-slate-950/20">
                  <p className="text-3xl">🔒</p>
                  <h3 className="mt-4 text-lg font-semibold">Secure data</h3>
                  <p className="mt-2 text-slate-400">Employee records stay protected in a clean, controlled system.</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white shadow-xl shadow-slate-950/20">
                  <p className="text-3xl">🎨</p>
                  <h3 className="mt-4 text-lg font-semibold">Polished UI</h3>
                  <p className="mt-2 text-slate-400">A modern interface designed for clarity and confidence.</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white shadow-xl shadow-slate-950/20">
                  <p className="text-3xl">📱</p>
                  <h3 className="mt-4 text-lg font-semibold">Mobile-friendly</h3>
                  <p className="mt-2 text-slate-400">Works beautifully across screens so your team can access data anywhere.</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-cyan-400/10 bg-cyan-500/5 p-10 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Team-first</p>
              <h3 className="mt-6 text-3xl font-semibold text-white">Everything your people need, wrapped in a single beautiful experience</h3>
              <ul className="mt-8 space-y-5 text-slate-300">
                <li className="flex gap-4 rounded-3xl border border-white/10 bg-slate-950/40 p-5">
                  <span className="mt-1 text-xl">✅</span>
                  <span>Instant employee profile updates with clear form UX.</span>
                </li>
                <li className="flex gap-4 rounded-3xl border border-white/10 bg-slate-950/40 p-5">
                  <span className="mt-1 text-xl">✅</span>
                  <span>Smart workflows for editing, searching, and reporting.</span>
                </li>
                <li className="flex gap-4 rounded-3xl border border-white/10 bg-slate-950/40 p-5">
                  <span className="mt-1 text-xl">✅</span>
                  <span>Secure employee records with a sleek visual dashboard.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-700 relative overflow-hidden">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl"></div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Ready to launch</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Get your employee workflow live in minutes</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Start managing your people with a platform that keeps operations fast, secure, and beautifully organized.
          </p>
          <Link to="/addemployee">
            <button className="mt-10 inline-flex rounded-full bg-white px-10 py-4 text-lg font-semibold text-slate-950 shadow-xl shadow-cyan-500/30 transition hover:-translate-y-0.5 hover:bg-slate-100">
              Start Managing Now
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home