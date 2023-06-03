import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import './Facture.css'
import TabMaterielAcheter from '../../../components/Tableau/TabMaterielAcheter'
import BtnVert from '../../../components/Bouton/BtnVert'
import axios from '../../../helpers/axiosConfig'

const index = ({}) => {

  const [infoClient, setInfoClient] = useState({});
  const [listeMateriel, setListeMateriel] = useState([]);
  const [showLoader, setShowLoader] = useState(true);
  const [annee, setAnnee] = useState(new Date().getFullYear());
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

  const getAnneeCA = () => {
    return [...new Set(listeMateriel.map(c => new Date(c.date).getFullYear()))];
  }

  const listeMaterielFiltrer = (annee) => {
    return listeMateriel.filter(materiel => new Date(materiel.date).getFullYear() == annee)
  }

  return (
    <div className='info-clients facture'>
        <p style={{textAlign: 'center'}}>FACTURE N° : <span>1</span></p>
        <p>N°CLIENTS : <span>{infoClient?.numClient}</span></p>
        <p>NOM CLIENT : <span>{infoClient?.nom} {infoClient?.prenom}</span></p>
        <div className="annee">
            <label>ANNEE : </label>
            <select onChange={e => {setAnnee(e.target.value)}}>
            {
              getAnneeCA()?.map(annee => <option key={annee} value={annee}>{annee}</option>)
            }
            </select> 
        </div>
       
        <TabMaterielAcheter listeMateriel={listeMaterielFiltrer(annee)} showLoader={showLoader} />
        <div className="footer">
          <p className='somme-total'><span>Arretée la présente facture a la somme de cinquante mille Ariary</span></p>
          <BtnVert>Exporter en pdf</BtnVert>
      </div>
    </div>
  )
}

export default index