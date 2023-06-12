import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import InputForm from '../../../components/InputForm/InputForm';
import BtnVert from '../../../components/Bouton/BtnVert';
import BtnRouge from '../../../components/Bouton/BtnRouge';
import InputNumberForm from '../../../components/InputForm/InputNumberForm';
import axios from '../../../helpers/axiosConfig';
import alerte from '../../../helpers/alerte';

const index = () => {

  const [materiel, setMateriel] = useState({
    numMateriel : "",
    design : "",
    prixUnitaire : "0",
    stock : "0"
  });

  const [txtBtn, setTxtBtn] = useState('Enregistrer');

  const enregistrer = () => {
    setTxtBtn('En attente...');
    axios.post('/materiel/add', materiel)
      .then(rep => {
        alerte(rep.data.type, rep.data.message);
        if(rep.data.type === 'success'){
          setMateriel({numMateriel: "", design: "", prixUnitaire: "", stock: ""})
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
        <InputForm label="N°Matériel" name="numMateriel" value={materiel.numMateriel} onChangeInput={setMateriel} />
        <InputForm label="Design" name="design" value={materiel.design} onChangeInput={setMateriel} />
        <InputNumberForm label="Prix unitaire(Ar)" name="prixUnitaire" value={materiel.prixUnitaire} onChangeInput={setMateriel} />
        <InputNumberForm label="Stock" name="stock" value={materiel.stock} onChangeInput={setMateriel} />
        <div className="btn-group">
          <BtnRouge>
            <Link to="/app/materiels/liste">Annuler</Link>
          </BtnRouge>
          <BtnVert enregistrer={enregistrer}>{txtBtn}</BtnVert>
        </div>
      </div>
    </div>
  )
}

export default index