import React from 'react';
import InputForm from '../../../components/InputForm/InputForm';
import BtnVert from '../../../components/Bouton/BtnVert';
import BtnRouge from '../../../components/Bouton/BtnRouge';

const index = () => {
  return (
    <div className='nouveau-clients'>
      <div className="form">
        <InputForm label="N°Materiel" value="MAT01" />
        <InputForm label="Design" value="Ecran" />
        <InputForm label="Prix unitaire(Ar)" value="150000" />
        <InputForm label="Stock" value="12" />
        <div className="btn-group">
          <BtnRouge>Annuler</BtnRouge>
          <BtnVert>Modifier</BtnVert>
        </div>
      </div>
    </div>
  )
}

export default index