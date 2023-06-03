import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import './InfoClients.css'
import FiltreTab from '../../../components/FiltreTab/FiltreTab'
import TabMaterielAcheter from '../../../components/Tableau/TabMaterielAcheter'
import BtnRouge from '../../../components/Bouton/BtnRouge'
import axios from '../../../helpers/axiosConfig'

const index = () => {

  const [infoClient, setInfoClient] = useState({});
  const [listeMateriel, setListeMateriel] = useState([]);
  const [showLoader, setShowLoader] = useState(true);
  const {id} = useParams();
  useEffect(() => {
    axios.get(`/client/info_client/${id}`)
      .then(response => {
        setListeMateriel(response.data);
        setShowLoader(false);
      })
    
    axios.get(`/client/${id}`)
      .then(response => {
        setInfoClient(response.data);
      })
  }, [])

  const chiffreAffaireTotal = () => {
    return listeMateriel.reduce((acc, obj) => acc + obj.montant, 0)
  }

  return (
    <div className='info-clients'>
        <p>N°CLIENTS : <span>{infoClient?.numClient}</span></p> 
        <p>NOM CLIENT : <span>{infoClient?.nom} {infoClient?.prenom}</span></p>
        <p>LISTES DES MATERIELS ACHETES : </p>
        <FiltreTab />
        <TabMaterielAcheter listeMateriel={listeMateriel} showLoader={showLoader} />
        <div className="footer">
          <p className='somme-total'>SOMME TOTAL : <span>{chiffreAffaireTotal()} Ar</span></p>
          <BtnRouge>Retour</BtnRouge>
        </div>
    </div>
  )
}

export default index