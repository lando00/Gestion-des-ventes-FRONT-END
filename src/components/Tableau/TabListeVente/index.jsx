import React from 'react';
import '../TabStyle.css';
import './TabListeVente.css';
import TabLigne from './TabLigne';
import TabLigneTitre from './TabLigneTitre';

const index = () => {
  return (
    <div className="tableau tab-liste-clients tab-liste-vente">
        <TabLigneTitre />
        <TabLigne />
        <TabLigne />
        <TabLigne />
        <TabLigne />
        <TabLigne />
        <TabLigne />
        <TabLigne />
        <TabLigne />
        <TabLigne />
        <TabLigne />
        <TabLigne />
    </div>
  )
}

export default index