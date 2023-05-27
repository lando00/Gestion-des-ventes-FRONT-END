import React from 'react'
import './InfoClients.css'
import FiltreTab from '../../../components/FiltreTab/FiltreTab'
import TabMaterielAcheter from '../../../components/Tableau/TabMaterielAcheter'
import BtnRouge from '../../../components/Bouton/BtnRouge'

const index = () => {
  return (
    <div className='info-clients'>
        <p>N°CLIENTS : <span>CL01</span></p>
        <p>NOM CLIENT : <span>RAKOTONIRINA Rabe</span></p>
        <p>LISTES DES MATERIELS ACHETES : </p>
        <FiltreTab />
        <TabMaterielAcheter />
        <div className="footer">
          <p className='somme-total'>SOMME TOTAL : <span>1 850 000 Ar</span></p>
          <BtnRouge>Retour</BtnRouge>
      </div>
    </div>
  )
}

export default index