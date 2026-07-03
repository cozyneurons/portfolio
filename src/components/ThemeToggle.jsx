import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Magnetic>
      <motion.button
        onClick={toggleTheme}
        className="theme-toggle"
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
      </motion.button>
    </Magnetic>
  );
};

export default ThemeToggle;
