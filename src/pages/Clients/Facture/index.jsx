import React from 'react'
import './Facture.css'
import TabMaterielAcheter from '../../../components/Tableau/TabMaterielAcheter'
import BtnVert from '../../../components/Bouton/BtnVert'

const index = () => {
  return (
    <div className='info-clients facture'>
        <p style={{textAlign: 'center'}}>FACTURE N° : <span>1</span></p>
        <p>N°CLIENTS : <span>CL01</span></p>
        <p>NOM CLIENT : <span>RAKOTONIRINA Rabe</span></p>
        <div className="annee">
            <label>ANNEE : </label>
            <select>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
            </select> 
        </div>
       
        <TabMaterielAcheter />
        <div className="footer">
          <p className='somme-total'><span>Arretée la présente facture a la somme de cinquante mille Ariary</span></p>
          <BtnVert>Exporter en pdf</BtnVert>
      </div>
    </div>
  )
}

export default index