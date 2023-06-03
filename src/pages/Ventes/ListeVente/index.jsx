import React, { useEffect, useState } from 'react';
import BarreRecherche from '../../../components/BarreRecherche';
import FiltreTab from '../../../components/FiltreTab/FiltreTab';
import TabListeVente from '../../../components/Tableau/TabListeVente';
import './ListeVente.css';
import axios from '../../../helpers/axiosConfig';

const index = () => { 

  const [listeVente, setListeVente] = useState([]);
  const [recherche, setRecherche] = useState("");
  const [showLoader, setShowLoader] = useState(true);
  const [rechargerPage, setRechargerPage] = useState(false);

  useEffect(() => { 
    axios.get('/vente/liste')
      .then((reponse) => {
        setListeVente(reponse.data);
        setShowLoader(false);
      })
  }, [rechargerPage]);


  const listeVenteFiltrer = (recherche) => {

    let resultatRecherche = listeVente.filter(vente => vente.nomClient.toLowerCase().includes(recherche.toLowerCase()) ||  vente.materiel.toLowerCase().includes(recherche.toLowerCase()));

    return recherche ? resultatRecherche : listeVente;
  }

  return (
    <div className='liste-vente'>
        <BarreRecherche placeholder="client" rechercher={setRecherche} />
        <FiltreTab />
        <TabListeVente listeVente={listeVenteFiltrer(recherche)} showLoader={showLoader} setRechargerPage={setRechargerPage}/>
    </div>
  )
}

export default index