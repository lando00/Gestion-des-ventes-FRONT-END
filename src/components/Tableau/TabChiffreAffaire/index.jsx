import React from 'react';
import TabLigne from './TabLigne';
import TabLigneTitre from './TabLigneTitre';
import './TabChiffreAffaire.css';
import '../TabStyle.css';

const index = () => {
  return (
    <div className="tableau tab-chiffre-affaire">
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
    </div>
  )
}

export default index