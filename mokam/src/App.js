import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './shared/common.scss'
import ManufacturersPage from './pages/Manufacturers'
import RetailPage from './pages/Retail'
import ThanksPage from './pages/Thanks'
import './i18n'

function App() {
  const [currentLanguage, setCurrentLanguage] = useState('')

  useState(() => {
    if (window.location.pathname.includes('/bn')) {
      setCurrentLanguage('bn')
    } else {
      setCurrentLanguage('en')
    }
  }, [])
  return (
    <div className="App">
      <Routes>
        <Route path={'retail/:lang'} element={<RetailPage currLang={currentLanguage} setCurrLang={setCurrentLanguage} />} />
        <Route path={'manufacturers/:lang'} element={<ManufacturersPage currLang={currentLanguage} setCurrLang={setCurrentLanguage} />} />

        {['/retail/thanks/:lang', '/manufacturers/thanks/:lang'].map((path, index) => (
          <Route path={path} key={index} element={<ThanksPage currLang={currentLanguage} setCurrLang={setCurrentLanguage} />} />
        ))}
      </Routes>
    </div>
  )
}

export default App
