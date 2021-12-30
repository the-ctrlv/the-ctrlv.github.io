import { Route, Routes } from 'react-router-dom';
import './common.scss';
import Retail from './pages/Retail';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/retail" element={<Retail />} />
      </Routes>
    </div>
  );
}

export default App;
