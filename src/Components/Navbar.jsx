import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close mobile menu when clicking on a link
  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="w-full bg-[#0D1117]/95 backdrop-blur-sm border-b border-[#30363D] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to={'/'} className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-[#0095ff] rounded-lg flex items-center justify-center group-hover:bg-[#1F6FEB] transition-colors duration-300">
                <span className="text-white font-bold text-lg">AI</span>
              </div>
              <span className="text-[#E6EDF3] font-bold text-lg tracking-tight group-hover:text-[#0095ff] transition-colors duration-300">
                Code Reviewer
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                to={'/'} 
                className="text-[#8B949E] hover:text-[#E6EDF3] px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-[#161B22]"
              >
                🏠 Home
              </Link>
              
              {/* Features Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={toggleDropdown}
                  className="text-[#8B949E] hover:text-[#E6EDF3] px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-[#161B22] flex items-center"
                >
                  ✨ Features
                  <svg className={`ml-1 h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-[#161B22] rounded-lg shadow-xl border border-[#30363D] py-2 z-50 animate-in slide-in-from-top-2 duration-200">
                    <Link 
                      to={'/features'} 
                      className="block px-4 py-3 text-sm text-[#8B949E] hover:text-[#E6EDF3] hover:bg-[#21262D] transition-all duration-200 flex items-center"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <span className="mr-3">✨</span>
                      All Features
                    </Link>
                    <Link 
                      to={'/documentation'} 
                      className="block px-4 py-3 text-sm text-[#8B949E] hover:text-[#E6EDF3] hover:bg-[#21262D] transition-all duration-200 flex items-center"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <span className="mr-3">📚</span>
                      Documentation
                    </Link>
                    <Link 
                      to={'/code-review'} 
                      className="block px-4 py-3 text-sm text-[#8B949E] hover:text-[#E6EDF3] hover:bg-[#21262D] transition-all duration-200 flex items-center"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <span className="mr-3">🔍</span>
                      Code Review
                    </Link>
                  </div>
                )}
              </div>

              <Link 
                to={'/about'} 
                className="text-[#8B949E] hover:text-[#E6EDF3] px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-[#161B22]"
              >
                ℹ️ About
              </Link>
              
              <Link 
                to={'/code-review'} 
                className="bg-[#0095ff] hover:bg-[#1F6FEB] text-[#E6EDF3] px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                🔍 Review Code
              </Link>
            </div>
          </div>

          {/* GitHub Button */}
          <div className="hidden md:block">
            <a 
              href="https://github.com/Sujal200507" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#161B22] hover:bg-[#21262D] text-[#E6EDF3] px-4 py-2 rounded-md text-sm font-medium border border-[#30363D] transition-all duration-300 flex items-center space-x-2 hover:border-[#0095ff]"
            >
              <i className="ri-github-fill text-lg"></i>
              <span>GitHub</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#8B949E] hover:text-[#E6EDF3] p-2 rounded-md transition-colors duration-300 hover:bg-[#161B22]"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#161B22] border-t border-[#30363D] animate-in slide-in-from-top-2 duration-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              to={'/'} 
              className="text-[#8B949E] hover:text-[#E6EDF3] block px-3 py-3 rounded-md text-base font-medium transition-all duration-300 hover:bg-[#21262D]"
              onClick={closeMobileMenu}
            >
              🏠 Home
            </Link>
            <Link 
              to={'/features'} 
              className="text-[#8B949E] hover:text-[#E6EDF3] block px-3 py-3 rounded-md text-base font-medium transition-all duration-300 hover:bg-[#21262D]"
              onClick={closeMobileMenu}
            >
              ✨ Features
            </Link>
            <Link 
              to={'/about'} 
              className="text-[#8B949E] hover:text-[#E6EDF3] block px-3 py-3 rounded-md text-base font-medium transition-all duration-300 hover:bg-[#21262D]"
              onClick={closeMobileMenu}
            >
              ℹ️ About
            </Link>
            <Link 
              to={'/documentation'} 
              className="text-[#8B949E] hover:text-[#E6EDF3] block px-3 py-3 rounded-md text-base font-medium transition-all duration-300 hover:bg-[#21262D]"
              onClick={closeMobileMenu}
            >
              📚 Documentation
            </Link>
            <Link 
              to={'/code-review'} 
              className="bg-[#0095ff] hover:bg-[#1F6FEB] text-[#E6EDF3] block px-3 py-3 rounded-md text-base font-medium transition-all duration-300"
              onClick={closeMobileMenu}
            >
              🔍 Review Code
            </Link>
            <a 
              href="https://github.com/Sujal200507" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#161B22] hover:bg-[#21262D] text-[#E6EDF3] block px-3 py-3 rounded-md text-base font-medium border border-[#30363D] transition-all duration-300 flex items-center space-x-2 hover:border-[#0095ff]"
              onClick={closeMobileMenu}
            >
              <i className="ri-github-fill text-lg"></i>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
