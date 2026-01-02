import { NavLink, useLocation } from "react-router-dom";

import { here } from "../assets/images";

const Navbar = ({ darkMode, setDarkMode }) => {
  const location = useLocation();
  const showDarkModeToggle = location.pathname !== '/';

  const handleToggle = () => {
    console.log('Toggle clicked, current darkMode:', darkMode);
    setDarkMode(!darkMode);
    console.log('New darkMode should be:', !darkMode);
  };

  return (
    <header className='header transition-colors duration-300'>
      <NavLink to='/'>
        <img src={here} alt='logo' className='w-18 h-18 object-contain' />
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium items-center'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-purple-600 dark:text-purple-400" : "text-black dark:text-white" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-purple-600 dark:text-purple-400" : "text-black dark:text-white"}>
          Projects
        </NavLink>
        
        {/* Dark Mode Toggle - Only show on non-home pages */}
        {showDarkModeToggle && (
          <button
            onClick={handleToggle}
            className='ml-2 relative w-9 h-5 rounded-full transition-colors duration-300 focus:outline-none flex items-center'
            style={{ backgroundColor: darkMode ? 'rgba(139, 92, 246, 0.35)' : 'rgba(209, 213, 219, 0.35)' }}
            aria-label="Toggle dark mode"
          >
            {/* Moon icon for dark mode (default) */}
            <svg 
              className={`absolute left-0.5 w-3.5 h-3.5 transition-all duration-500 ${darkMode ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-180 scale-0'}`}
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
            
            {/* Sun icon for light mode */}
            <svg 
              className={`absolute right-0.5 w-3.5 h-3.5 text-white transition-all duration-500 ${darkMode ? 'opacity-0 rotate-0 scale-0' : 'opacity-100 -rotate-180 scale-100'}`}
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            </svg>
          </button>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
