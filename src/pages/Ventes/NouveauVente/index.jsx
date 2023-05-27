import React from 'react';
import './NouveauVente.css';
import TabEffectuerVente from '../../../components/Tableau/TabEffectuerVente';
import BtnRouge from '../../../components/Bouton/BtnRouge';
import BtnVert from '../../../components/Bouton/BtnVert';

const index = () => {
  return (
    <div className='effectuer-vente'>
      <div className='info-clients nouveau-vente'>
        <p>N°CLIENTS : <span>CL01</span></p>
        <div className="annee">
          <p>NOM CLIENT : </p>
          <select>
            <option>RAKOTONIRINA Rabe</option>
          </select>
        </div> 
      </div>
      <select className='choix-materiel'>
        <option>Selectionner un matériel</option>
        <option>Ecran</option>
        <option>Ram</option>
        <option>Souris</option>
      </select>
      <TabEffectuerVente />
      <div className="footer">
          <p className='somme-total'>SOMME TOTAL : <span>1 850 000 Ar</span></p>
          <div className="btn">
            <BtnRouge>Annuler</BtnRouge>
            <BtnVert>Valider</BtnVert>
          </div>
      </div>
    </div>
  )
}

export default index