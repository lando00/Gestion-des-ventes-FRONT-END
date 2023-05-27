import React from 'react';
import './ListeClients.css';
import BarreRecherche from '../../../components/BarreRecherche/index';
import TabListeClients from '../../../components/Tableau/TabListeClients';

const index = () => {
  return (
    <div className='liste-clients'>
      <BarreRecherche />
      <TabListeClients />
    </div>
  )
}

export default index