import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

const ThemeContext = createContext();

const STORAGE_KEY = 'theme'; // 'light' | 'dark'

export function ThemeProvider({ children, defaultTheme = 'light' }) {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved === 'dark' || saved === 'light' ? saved : defaultTheme;
    } catch {
      return defaultTheme;
    }
  });

  const applyTheme = useCallback((t) => {
    const root = document.documentElement;
    if (t === 'dark') {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
    }
  }, []);

  useEffect(() => {
    applyTheme(theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {}
  }, [theme, applyTheme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  const value = { theme, setTheme, toggleTheme };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return ctx;
}
