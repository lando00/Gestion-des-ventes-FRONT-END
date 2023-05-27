import React from 'react';
import FiltreTab from '../../../components/FiltreTab/FiltreTab';
import TabListeMateriel from '../../../components/Tableau/TabListeMateriel';

const index = () => {
  return (
    <div className='chiffre-affaire' >
      <div className="annee" style={{justifyContent: 'flex-start', marginBottom:'30px', paddingLeft:'25px'}}>
        <span>Type de mouvement : </span>
        <select>
          <option>Entrée</option>
          <option>Sortie</option>
        </select>
      </div>
      <FiltreTab />
      <TabListeMateriel />
    </div>
  )
}

export default index