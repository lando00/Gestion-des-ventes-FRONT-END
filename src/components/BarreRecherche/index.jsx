import React from 'react';
import './BarreRecherche.css';

const index = () => {
  return (
    <div className='barre-recherche'>
        <i className='fab fa-sistrix'></i>
        <input type="search" placeholder='Rechercher un materiel...' />
    </div>
  )
}

export default index