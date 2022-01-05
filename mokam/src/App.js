import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './common.scss'
import ManufacturersPage from './pages/Manufacturers'
import RetailPage from './pages/Retail'
import ThanksPage from './pages/Thanks'

function App() {
  const [english, setEnglish] = useState(true)
  return (
    <div className="App">
      <Routes>
        <Route path="/retail" element={<RetailPage english={english} setLanguage={setEnglish} />} />
        <Route path="/manufacturers" element={<ManufacturersPage english={english} setLanguage={setEnglish} />} />
        {['/retail/thanks', '/manufacturers/thanks'].map((path, index) => (
          <Route path={path} key={index} element={<ThanksPage english={english} setLanguage={setEnglish} />} />
        ))}
      </Routes>
    </div>
  )
}

export default App
