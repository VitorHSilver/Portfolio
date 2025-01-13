import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggle = () => {
     const { theme, toggleTheme } = useContext(ThemeContext);

     return (
          <button
               onClick={toggleTheme}
               className="p-2 rounded-full focus:ring-indigo-100 transition ease-in hover:scale-125"
          >
               {theme === 'light' ? '🌙' : '☀️'}
          </button>
     );
};

export default ThemeToggle;
