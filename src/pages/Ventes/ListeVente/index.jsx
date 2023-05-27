import React from 'react';
import BarreRecherche from '../../../components/BarreRecherche';
import FiltreTab from '../../../components/FiltreTab/FiltreTab';
import TabListeVente from '../../../components/Tableau/TabListeVente';
import './ListeVente.css';

const index = () => {
  return (
    <div className='liste-vente'>
        <BarreRecherche placeholder="client" />
        <FiltreTab />
        <TabListeVente />
    </div>
  )
}

export default index