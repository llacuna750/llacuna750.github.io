import { useEffect, useState } from 'react'

const themeStorageKey = 'portfolio-theme'

function getInitialTheme() {
  if (typeof document !== 'undefined') {
    const documentTheme = document.documentElement.dataset.theme
    if (documentTheme === 'light' || documentTheme === 'dark') return documentTheme
  }

  if (typeof window === 'undefined') return 'light'

  try {
    const savedTheme = window.localStorage.getItem(themeStorageKey)
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme
  } catch {
    // Fall back to the system preference when storage is unavailable.
  }

  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function useTheme() {
  const [theme, setTheme] = useState('light')
  const [isThemeLoaded, setIsThemeLoaded] = useState(false)

  useEffect(() => {
    setTheme(getInitialTheme())
    setIsThemeLoaded(true)
  }, [])

  useEffect(() => {
    if (!isThemeLoaded) return

    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      'content',
      theme === 'dark' ? '#0c1222' : '#f7f8fc',
    )

    try {
      window.localStorage.setItem(themeStorageKey, theme)
    } catch {
      // Theme selection still works if storage is unavailable.
    }
  }, [theme, isThemeLoaded])

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  return { theme, toggleTheme }
}
