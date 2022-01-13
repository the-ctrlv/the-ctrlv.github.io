import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './shared/common.scss'
import ManufacturersPage from './pages/Manufacturers'
import RetailPage from './pages/Retail'
import ThanksPage from './pages/Thanks'
import './i18n'

function App() {
  const [currentLanguage, setCurrentLanguage] = useState('en')
  return (
    <div className="App">
      <Routes>
        <Route path="/retail" element={<RetailPage currLang={currentLanguage} setCurrLang={setCurrentLanguage} />} />
        <Route path="/manufacturers" element={<ManufacturersPage currLang={currentLanguage} setCurrLang={setCurrentLanguage} />} />
        {['/retail/thanks', '/manufacturers/thanks'].map((path, index) => (
          <Route path={path} key={index} element={<ThanksPage currLang={currentLanguage} setCurrLang={setCurrentLanguage} />} />
        ))}
      </Routes>
    </div>
  )
}

export default App
