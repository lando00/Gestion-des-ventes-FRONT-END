import React from 'react';
import { NavLink } from 'react-router-dom';
import './Parametres.css';
import TitrePage from '../../components/TitrePage/TitrePage';
import InputForm from '../../components/InputForm/InputForm';
import BtnVert from '../../components/Bouton/BtnVert';
import BtnRouge from '../../components/Bouton/BtnRouge';

const Parametres = () => {
  return (

    <div className='parametres'>
       <TitrePage titre="Paramètres" />
       <ul className="sous-menu">
          <li>
            <NavLink to="/parametres">CHANGER MOT DE PASSE</NavLink>
          </li>
        </ul>
        <div className='nouveau-clients'>
          <div className="form">
            <InputForm label="Ancien mot de passe" value="" />
            <InputForm label="Nouveau mot de passe" value="" />
            <InputForm label="Confirmer mot de passe" value="" />
            <div className="btn-group">
              <BtnRouge>Annuler</BtnRouge>
              <BtnVert>Enregistrer</BtnVert>
            </div>
          </div>
        </div>
    </div>


  )
}

export default Parametres 