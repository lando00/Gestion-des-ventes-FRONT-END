import React from 'react';
import BarreRecherche from '../../../components/BarreRecherche';
import TabListeMaterielVendu from '../../../components/Tableau/TabListeMaterielVendu'

const index = () => {
  return (
    <div>
      <BarreRecherche placeholder="materiel" />
      <TabListeMaterielVendu />
      <div className="footer">
        <p className='somme-total'>MONTANT TOTAL : <span>1 850 000 Ar</span></p>
      </div>
    </div>
  )
}

export default index