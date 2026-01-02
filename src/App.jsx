import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

import { Footer, Navbar } from "./components";
import { About, Contact, Home, Projects } from "./pages";

const App = () => {
  // Initialize dark mode from localStorage or default to true
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    const initialValue = saved !== null ? JSON.parse(saved) : true;
    // Apply dark class immediately to prevent flash
    if (initialValue) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    return initialValue;
  });

  useEffect(() => {
    // Apply or remove dark class on document root
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    // Save to localStorage
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <main className='bg-white dark:bg-black min-h-screen transition-colors duration-300'>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/*'
          element={
            <>
              <Routes>
                <Route path='/about' element={<About />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/contact' element={<Contact />} />
              </Routes>
              <Footer />
            </>
          }
        />
      </Routes>
    </main>
  );
};

export default App;
