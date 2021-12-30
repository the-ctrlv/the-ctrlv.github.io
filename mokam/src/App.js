import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dummy2 from './components/Footer';
import Dummy from './components/Header';


function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/dummy" element={<Dummy />} />
        <Route path="/dummy2" element={<Dummy2 />} />
      </Routes>
    </div>
  );
}

export default App;
