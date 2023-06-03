import React, { useEffect, useState } from 'react';
import './ChiffreAffaire.css';
import TabChiffreAffaire from '../../../components/Tableau/TabChiffreAffaire';
import BtnVert from '../../../components/Bouton/BtnVert';
import axios from '../../../helpers/axiosConfig';

const index = () => {

  const [listeClient, setListeClient] = useState([]);
  const [annee, setAnnee] = useState(new Date().getFullYear());

  useEffect(() => {
    axios.get("/client/chiffre_affaire")
      .then(response => {
        setListeClient(response.data);
      })
      .catch(err => console.log(err))
  }, []);


  const chiffreAffaire = (annee) => {
    let prevObject = {numClient:""};
    let tabResultat = [];
    for(let i = 0; i<listeClient.length; i++){
      let currentObject = listeClient[i];
      
      if(prevObject.numClient === currentObject.numClient){
        tabResultat.pop();
        tabResultat.push({...currentObject, montant : currentObject.montant + prevObject.montant});
      }else{
        tabResultat.push(currentObject);
      }

      prevObject = currentObject;

    }

    return tabResultat.filter(ca => ca.annee == annee);
  }

  const getAnneeCA = () => {
    return [...new Set(listeClient.map(c => c.annee))];
  } 


  const chiffreAffaireTotal = (annee) => {
    return chiffreAffaire(annee).reduce((acc, obj) => acc + obj.montant, 0)
  }


  return (
    <div className='chiffre-affaire'>
      <div className="annee">
        <span>ANNEE : </span>
        <select onChange={e => {setAnnee(e.target.value)}}>
          {
            getAnneeCA()?.map(annee => <option key={annee} value={annee}>{annee}</option>)
          }
        </select>
      </div>
      <TabChiffreAffaire chiffreAffaire={chiffreAffaire(annee)} />
      <div className="footer">
        <p className='somme-total'>CHIFFRE D'AFFAIRE TOTAL : <span>{chiffreAffaire(annee).length > 0 ? chiffreAffaireTotal(annee) : 0 } Ar</span></p>
        <BtnVert>Exporter en pdf</BtnVert>
      </div>
    </div>
  )
}

export default index