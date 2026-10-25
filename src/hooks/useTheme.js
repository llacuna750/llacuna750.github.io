import { useEffect, useState } from 'react'

const themeStorageKey = 'portfolio-theme'

function getInitialTheme() {
  const documentTheme = document.documentElement.dataset.theme
  if (documentTheme === 'light' || documentTheme === 'dark') return documentTheme

  try {
    const savedTheme = window.localStorage.getItem(themeStorageKey)
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme
  } catch {
    // Fall back to the system preference when storage is unavailable.
  }

  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
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
  }, [theme])

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  return { theme, toggleTheme }
}
