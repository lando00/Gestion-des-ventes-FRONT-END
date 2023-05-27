import './App.css';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';

import Dashboard from './pages/Dashboard/Dashboard';

import Clients from './pages/Clients/clients';
import ListeClients from './pages/Clients/ListeClients';
import NouveauClients from './pages/Clients/NouveauClients';
import ModifierClients from './pages/Clients/ModifierClients';
import ChiffreAffaire from './pages/Clients/ChiffreAffaire';
import InfoClients from './pages/Clients/InfoClients';
import FactureClients from './pages/Clients/Facture';

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
          <Route path="/clients" element={<Clients />}>
            <Route path="/clients/liste" element={<ListeClients />} />
            <Route path="/clients/nouveau" element={<NouveauClients />} />
            <Route path="/clients/modifier" element={<ModifierClients />} />
            <Route path="/clients/chiffre_affaire" element={<ChiffreAffaire />} />
            <Route path="/clients/info/:id" element={<InfoClients />} />
            <Route path="/clients/facture" element={<FactureClients />} />
          </Route>
          <Route path="/materiels" element={<Materiels />} />
          <Route path="/ventes" element={<Ventes />} />
          <Route path="/parametres" element={<Parametres />} />
        </Routes>
      </div>
   </div>
  )
}

export default App
