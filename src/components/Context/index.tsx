import React from 'react'
export const themesDefine = {
  primary: {
    background: ' #4CAF50',
    label: 'Green',
  },
  secondary: {
    background: ' #008CBA',
    label: 'Blue',
  },
  third: {
    background: ' #f44336',
    label: 'Red',
  },
  fourth: {
    background: '  #555555',
    label: 'Black',
  },
}

export default React.createContext({
  themes: themesDefine.primary,
  switchTheme: (background: string): void => {},
})
