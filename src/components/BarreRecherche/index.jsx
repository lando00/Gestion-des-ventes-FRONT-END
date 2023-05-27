import React from 'react';
import './BarreRecherche.css';

const index = ({placeholder}) => {
  return (
    <div className='barre-recherche'>
        <i className='fab fa-sistrix'></i>
        <input type="search" placeholder={`Rechercher un ${placeholder}...`} />
    </div>
  )
}

export default index