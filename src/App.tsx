import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home, About, Project, Contact, Signup, Signin } from './pages';
import { Menu } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
        {/* Navigation */}
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="text-2xl font-bold text-indigo-600">VoiceAI</Link>
              </div>
              
              {/* Mobile menu button */}
              <div className="flex items-center md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-500 hover:text-gray-600"
                >
                  <Menu size={24} />
                </button>
              </div>

              {/* Desktop navigation */}
              <div className="hidden md:flex md:items-center md:space-x-8">
                <Link to="/" className="text-gray-700 hover:text-indigo-600">Home</Link>
                <Link to="/about" className="text-gray-700 hover:text-indigo-600">About</Link>
                <Link to="/project" className="text-gray-700 hover:text-indigo-600">Project</Link>
                <Link to="/contact" className="text-gray-700 hover:text-indigo-600">Contact</Link>
                <Link to="/signup" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Home</Link>
                <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">About</Link>
                <Link to="/project" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Project</Link>
                <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Contact</Link>
                <Link to="/signin" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Sign In</Link>
                <Link to="/signup" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Sign Up</Link>
              </div>
            </div>
          )}
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;