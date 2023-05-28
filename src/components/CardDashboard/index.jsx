import React from 'react';
import './CardDashboard.css';

const index = ({titre, valeur, color, icon}) => {
  return (
    <div className='card-dashboard' style={{borderLeft: `5px solid ${color}`}}>
        <p>{titre}</p>
        <span>{valeur}</span>
        <i style={{color: `${color}`}} className={`fas ${icon}`}></i>
    </div>
  )
}

export default index