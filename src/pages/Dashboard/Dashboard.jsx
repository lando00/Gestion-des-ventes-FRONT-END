import React from 'react';
import './Dashboard.css';
import TitrePage from '../../components/TitrePage/TitrePage';
import CardDashboard from '../../components/CardDashboard';
import Histogramme from '../../components/Histogramme'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <TitrePage titre="Dashboard" />
      <div className="card-container">
        <CardDashboard titre="TOTAL CA" valeur="15689250" color="#4CAF50" icon="fa-money-bills" />
        <CardDashboard titre="TOTAL CLIENT" valeur="15"  color="#2196f3" icon="fa-users" />
        <CardDashboard titre="TOTAL MATERIEL" valeur="75" color="#f6b12d" icon="fa-box-archive" />
        <CardDashboard titre="TOTAL VENTE" valeur="60" color="#f44336" icon="fas fa-cart-shopping" />
      </div>
      <p className='titre-histogramme'>CHIFFRE D'AFFAIRE PAR CLIENT :</p>
      <div className="histogramme">
        <Histogramme />
      </div>
    </div>
  )
}

export default Dashboard