import React from 'react';

const TabLigne = ({numVente, nomClient, materiel, montant, quantite, prixUnitaire, date}) => {
  return (
    <div className="entree">
        <div className="cellules">
            <span>{nomClient}</span>
        </div>
        <div className="cellules">
            <span>{materiel}</span>
        </div>
        <div className="cellules">
            <span>{prixUnitaire} Ar</span>
        </div>
        <div className="cellules">
            <span>{quantite}</span>
        </div>
        <div className="cellules">
            <span>{montant}</span>
        </div>
        <div className="cellules">
            <span>{date}</span>
        </div>
        <div className="cellules"> 
            <span><i className='fas fa-trash-can' style={{color:'#fe3a3a', marginLeft:'25px'}} title='Supprimer'></i></span>
        </div>  
    </div>

  )
}

export default TabLigne