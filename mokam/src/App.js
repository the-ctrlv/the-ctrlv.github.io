import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./shared/common.scss";
import ManufacturersPage from "./pages/Manufacturers";
import RetailPage from "./pages/Retail";
import ThanksPage from "./pages/Thanks";
import "./i18n";

function App() {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState("bn");

  useState(() => {
    if (window.location.pathname.includes("/en")) {
      i18n.changeLanguage("en");
      setCurrentLanguage("en");
    } else {
      i18n.changeLanguage("bn");
      setCurrentLanguage("bn");
    }
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route
          path={"retail/:lang"}
          element={
            <RetailPage
              currLang={currentLanguage}
              setCurrLang={setCurrentLanguage}
            />
          }
        />
        <Route
          path={"manufacturers/:lang"}
          element={
            <ManufacturersPage
              currLang={currentLanguage}
              setCurrLang={setCurrentLanguage}
            />
          }
        />

        {["/retail/thanks/:lang", "/manufacturers/thanks/:lang"].map(
          (path, index) => (
            <Route
              path={path}
              key={index}
              element={
                <ThanksPage
                  currLang={currentLanguage}
                  setCurrLang={setCurrentLanguage}
                />
              }
            />
          )
        )}

        <Route
          path="*"
          element={<Navigate to={"retail/" + currentLanguage} />}
        />
      </Routes>
    </div>
  );
}

export default App;
