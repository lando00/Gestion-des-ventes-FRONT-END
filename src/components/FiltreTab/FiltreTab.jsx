import React from 'react';
import './FiltreTab.css'

const FiltreTab = () => {
  return (
    <div className='filtre-tab'>
        <label>Mois : </label>
        <select>
            <option value="Janvier">Janvier</option>
            <option value="Février">Février</option>
        </select>
        <span>ou</span>
        <label>Année : </label>
        <select>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
        </select>
        <span>ou</span>
        <label>Dates : </label>
        <input type='date' />
        <span>à</span>
        <input type='date' />
    </div>
  )
}

export default FiltreTab