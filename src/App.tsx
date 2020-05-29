import Routes from './Routes'
import ThemeContext, { themesDefine } from './components/Context'
import React, { useState } from 'react'

export default function App() {
  const [context, setContext] = useState({
    themes: themesDefine.primary,
    switchTheme: (background: string) => {
      setContext((currentTheme) => ({
        ...currentTheme,
        themes:
          background === themesDefine.primary.background
            ? themesDefine.primary
            : background === themesDefine.secondary.background
              ? themesDefine.secondary
              : background === themesDefine.third.background
                ? themesDefine.third
                : themesDefine.fourth,
      }))
    },
  })

  return (
    <>
      <ThemeContext.Provider value={context}>
        <Routes />
      </ThemeContext.Provider>
    </>
  )
}
