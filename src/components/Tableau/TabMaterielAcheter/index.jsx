import React from 'react';
import '../TabStyle.css';
import './TabMaterielAcheter.css';
import TabLigne from './TabLigne';
import TabLigneTitre from './TabLigneTitre';

const index = () => {
  return (
    <div className="tableau tab-materiel-acheter">
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