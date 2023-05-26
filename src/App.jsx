import './App.css';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './pages/Dashboard/Dashboard';
import Clients from './pages/Clients/Clients';
import Materiels from './pages/Materiels/Materiels';
import Ventes from './pages/Ventes/Ventes';
import Parametres from './pages/Parametres/Parametres';

function App() {


  return (
   <div className='app'>
      <Sidebar />
      <div className="pages-container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/materiels" element={<Materiels />} />
          <Route path="/ventes" element={<Ventes />} />
          <Route path="/parametres" element={<Parametres />} />
        </Routes>
      </div>
   </div>
  )
}

export default App
