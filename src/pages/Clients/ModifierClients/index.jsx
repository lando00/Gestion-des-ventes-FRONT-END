import React from 'react';
import InputForm from '../../../components/InputForm/InputForm';
import BtnVert from '../../../components/Bouton/BtnVert';
import BtnRouge from '../../../components/Bouton/BtnRouge';

const index = () => {
  return (
    <div className='nouveau-clients'>
      <div className="form">
        <InputForm label="N°Client" value="CL01" />
        <InputForm label="Nom" value="RAKOTONIRINA" />
        <InputForm label="Prénom(s)" value="Rabe" />
        <InputForm label="Téléphone" value="0326547812" />
        <div className="btn-group">
          <BtnRouge>Annuler</BtnRouge>
          <BtnVert>Modifier</BtnVert>
        </div>
      </div>
    </div>
  )
}

export default index