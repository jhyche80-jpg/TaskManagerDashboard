

import './App.css'
import Dashboard from './Components/Dashboard/Dashboard'
import { ThemeProvider } from './Components/Theme/Theme'
function App() {
 

  return (
    <div className='Main'>
      <ThemeProvider>
        <Dashboard />
      </ThemeProvider>


    </div>
  )
}

export default App
