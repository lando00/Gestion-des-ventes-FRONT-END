import React from 'react';
import InputForm from '../../../components/InputForm/InputForm';
import BtnVert from '../../../components/Bouton/BtnVert';
import BtnRouge from '../../../components/Bouton/BtnRouge';

const index = () => {
  return (
    <div className='nouveau-clients'>
      <div className="form">
        <InputForm label="N°Matériel" value="" />
        <InputForm label="Design" value="" />
        <InputForm label="Prix unitaire(Ar)" value="" />
        <InputForm label="Stock" value="" />
        <div className="btn-group">
          <BtnRouge>Annuler</BtnRouge>
          <BtnVert>Enregistrer</BtnVert>
        </div>
      </div>
    </div>
  )
}

export default index