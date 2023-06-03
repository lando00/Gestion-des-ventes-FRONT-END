import React from 'react';

const TabLigne = ({numMateriel, design, prixUnitaire, quantite, montant}) => {
  return (
    <div className="entree">
        <div className="cellules">
            <span>{numMateriel}</span>
        </div>
        <div className="cellules">
            <span>{design}</span>
        </div>
        <div className="cellules">
            <span>{prixUnitaire} Ar</span>
        </div>
        <div className="cellules">
            <span>{quantite}</span>
        </div>
        <div className="cellules">
            <span>{montant} Ar</span>
        </div>  
    </div>

  )
}

export default TabLigne