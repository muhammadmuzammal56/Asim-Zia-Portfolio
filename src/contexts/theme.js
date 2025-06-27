import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState(() => {
    // Check if there's a theme already set in localStorage
    const storedTheme = localStorage.getItem('themeName')
    return storedTheme || 'dark' // Default to 'dark' if not found
  })

  useEffect(() => {
    // Update the theme in localStorage if it's not already set
    if (!localStorage.getItem('themeName')) {
      localStorage.setItem('themeName', 'dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = themeName === 'dark' ? 'light' : 'dark'
    setThemeName(newTheme)
    localStorage.setItem('themeName', newTheme)
  }

  useEffect(() => {
    console.log('themeName', themeName) // You can remove this in production
  }, [themeName])

  return (
    <ThemeContext.Provider value={[{ themeName, toggleTheme }]}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { ThemeProvider, ThemeContext }
