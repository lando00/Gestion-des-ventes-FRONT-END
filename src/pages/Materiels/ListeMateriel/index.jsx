import React from 'react';
import BarreRecherche from '../../../components/BarreRecherche';
import TabListeMateriel from '../../../components/Tableau/TabListeMateriel'

const index = () => {
  return (
    <div>
      <BarreRecherche placeholder="materiel" />
      <TabListeMateriel />
    </div>
  )
}

export default index