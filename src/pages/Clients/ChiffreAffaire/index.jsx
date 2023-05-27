import React from 'react';
import './ChiffreAffaire.css';
import TabChiffreAffaire from '../../../components/Tableau/TabChiffreAffaire';
import BtnVert from '../../../components/Bouton/BtnVert';

const index = () => {
  return (
    <div className='chiffre-affaire'>
      <div className="annee">
        <span>ANNEE : </span>
        <select>
          <option>2023</option>
          <option>2022</option>
          <option>2021</option>
          <option>2020</option>
        </select>
      </div>
      <TabChiffreAffaire />
      <div className="footer">
        <p className='somme-total'>CHIFFRE D'AFFAIRE TOTAL : <span>1 850 000 Ar</span></p>
        <BtnVert>Exporter en pdf</BtnVert>
      </div>
    </div>
  )
}

export default index