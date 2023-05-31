import React, { useState } from 'react';
import './NouveauClients.css';
import InputForm from '../../../components/InputForm/InputForm';
import BtnVert from '../../../components/Bouton/BtnVert';
import BtnRouge from '../../../components/Bouton/BtnRouge';
import axios from '../../../helpers/axiosConfig';
import alerte from '../../../helpers/alerte';

const index = () => {

  const [client, setClient] = useState({
    numClient : "",
    nom : "",
    prenom : "",
    tel : ""
  });

  const [txtBtn, setTxtBtn] = useState('Enregistrer');

  const enregistrer = () => {
    setTxtBtn('En attente...');
    axios.post('/client/add', client)
      .then(rep => {
        alerte(rep.data.type, rep.data.message);
        if(rep.data.type === 'success'){
          setClient({numClient: "", nom: "", prenom: "", tel: ""})
        }
        setTxtBtn('Enregistrer');
      }).catch(() => {
        alerte("error", "Erreur, réessayer svp !");
        setTxtBtn('Enregistrer')
      })
  }

  return (
    <div className='nouveau-clients'>
      <div className="form">
        <InputForm label="N°Client" name="numClient" value={client.numClient} onChangeInput={setClient} />
        <InputForm label="Nom" name="nom" value={client.nom} onChangeInput={setClient} />
        <InputForm label="Prénom(s)" name="prenom" value={client.prenom} onChangeInput={setClient} />
        <InputForm label="Téléphone" name="tel" value={client.tel} onChangeInput={setClient} />
        <div className="btn-group">
          <BtnRouge>Annuler</BtnRouge>
          <BtnVert enregistrer={enregistrer}>{txtBtn}</BtnVert>
        </div>
      </div>
    </div>
  )
}

export default index