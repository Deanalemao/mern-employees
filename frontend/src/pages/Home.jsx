import React from 'react'
import { Link } from 'react-router'

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block mb-6">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur-lg opacity-75"></div>
                <div className="relative bg-white rounded-full p-4">
                  <span className="text-5xl">👥</span>
                </div>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
              Employee Management<span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"> System</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Streamline your workforce management with our modern, user-friendly platform. Add, view, edit, and organize employees effortlessly.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/employees">
                <button className="px-8 py-3 md:px-10 md:py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-lg font-semibold hover:shadow-[0_0_24px_rgba(59,130,246,0.15)] rounded-lg transition-all duration-300 ease-out shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                  <span className="text-2xl">👥</span> View Employees
                </button>
              </Link>
              <Link to="/addemployee">
                <button className="px-8 py-3 md:px-10 md:py-4 bg-white text-slate-900 border-2 border-slate-200 text-lg font-semibold hover:border-blue-500 hover:bg-blue-50 rounded-lg transition-all duration-300 ease-out shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]">
                  <span className="text-2xl">➕</span> Add Employee
                </button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mt-12 pt-12 border-t border-slate-200">
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-blue-600 mb-1">100%</div>
                <div className="text-sm text-slate-600">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-blue-600 mb-1">Fast</div>
                <div className="text-sm text-slate-600">Performance</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-blue-600 mb-1">Easy</div>
                <div className="text-sm text-slate-600">To Use</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white border-t border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Features</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Everything you need to manage your team effectively</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all duration-300 p-8 animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-blue-600/10 rounded-2xl blur-xl"></div>
                <div className="relative bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-4 w-16 h-16 flex items-center justify-center text-3xl">
                  📊
                </div>
              </div>
              <h3 className="text-xl font-display font-bold text-slate-900 mb-3">View Employees</h3>
              <p className="text-slate-600">Browse, search, and filter your entire employee database with real-time updates.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all duration-300 p-8 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-cyan-600/10 rounded-2xl blur-xl"></div>
                <div className="relative bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-4 w-16 h-16 flex items-center justify-center text-3xl">
                  ➕
                </div>
              </div>
              <h3 className="text-xl font-display font-bold text-slate-900 mb-3">Add Employees</h3>
              <p className="text-slate-600">Quickly register new employees with comprehensive details in a streamlined form.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all duration-300 p-8 animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-blue-600/10 rounded-2xl blur-xl"></div>
                <div className="relative bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl p-4 w-16 h-16 flex items-center justify-center text-3xl">
                  ⚙️
                </div>
              </div>
              <h3 className="text-xl font-display font-bold text-slate-900 mb-3">Manage Data</h3>
              <p className="text-slate-600">Edit employee information and remove outdated records with ease and safety.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Why Choose Employee Hub?</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Built with modern technology and best practices</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '⚡', title: 'Lightning Fast', desc: 'Optimized performance' },
              { icon: '📱', title: 'Responsive', desc: 'Works everywhere' },
              { icon: '🎨', title: 'Beautiful UI', desc: 'Modern design' },
              { icon: '🔒', title: 'Secure', desc: 'Your data protected' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] p-6 text-center hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] hover:scale-105 transition-all duration-300 ease-out">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Join hundreds of businesses managing their workforce efficiently
          </p>
          
          <Link to="/addemployee">
            <button className="px-10 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-900 text-lg font-semibold hover:shadow-[0_0_24px_rgba(59,130,246,0.15)] rounded-lg transition-all duration-300 ease-out shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
              Start Managing Now
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home