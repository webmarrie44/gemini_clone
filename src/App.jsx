import React from 'react'
import Sidebar from './components/sidebar/sidebar'
import { ThemeProvider } from "./context/ThemeContext";
import Main from './components/Main/Main'
const App = () => {
  return (
    <ThemeProvider>
      <Sidebar />
      <Main />
      </ThemeProvider>
  )
}

export default App
