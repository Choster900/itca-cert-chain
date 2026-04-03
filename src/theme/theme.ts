export type ThemeMode = 'light' | 'dark'

const THEME_KEY = 'theme'

function getRootElement(): HTMLElement {
  return document.documentElement
}

export function setTheme(mode: ThemeMode): void {
  const root = getRootElement()
  root.classList.toggle('dark', mode === 'dark')
  localStorage.setItem(THEME_KEY, mode)
}

export function getTheme(): ThemeMode {
  return getRootElement().classList.contains('dark') ? 'dark' : 'light'
}

export function toggleTheme(): ThemeMode {
  const nextTheme: ThemeMode = getTheme() === 'dark' ? 'light' : 'dark'
  setTheme(nextTheme)
  return nextTheme
}

export function initThemeFromStorage(): ThemeMode {
  const stored = localStorage.getItem(THEME_KEY)

  if (stored === 'light' || stored === 'dark') {
    setTheme(stored)
    return stored
  }

  const preferredDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const inferred: ThemeMode = preferredDark ? 'dark' : 'light'
  setTheme(inferred)
  return inferred
}
