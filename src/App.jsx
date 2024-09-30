import React from 'react'
import ThemeProviderComponent from './components/themeProviderComponent'
import ThemedComponent from './components/themedComponent'


function App() {

  return (
    <ThemeProviderComponent>
      <ThemedComponent />
    </ThemeProviderComponent>
  )
}

export default App
