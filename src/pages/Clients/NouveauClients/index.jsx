import React from 'react';
import './NouveauClients.css';
import InputForm from '../../../components/InputForm/InputForm';
import BtnVert from '../../../components/Bouton/BtnVert';
import BtnRouge from '../../../components/Bouton/BtnRouge';

const index = () => {
  return (
    <div className='nouveau-clients'>
      <div className="form">
        <InputForm label="N°Client" value="" />
        <InputForm label="Nom" value="" />
        <InputForm label="Prénom(s)" value="" />
        <InputForm label="Téléphone" value="" />
        <div className="btn-group">
          <BtnRouge>Annuler</BtnRouge>
          <BtnVert>Enregistrer</BtnVert>
        </div>
      </div>
    </div>
  )
}

export default index