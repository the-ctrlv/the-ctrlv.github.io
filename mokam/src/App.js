import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './common.scss'
import ManufacturersPage from './pages/Manufacturers'
import RetailPage from './pages/Retail'

function App() {
  const [isEN, setIsEN] = useState(true)
  return (
    <div className="App">
      <Routes>
        <Route path="/retail" element={<RetailPage isLanguageEN={isEN} setLanguage={setIsEN} />} />
        <Route path="/manufacturers" element={<ManufacturersPage isLanguageEN={isEN} setLanguage={setIsEN} />} />
      </Routes>
    </div>
  )
}

export default App
