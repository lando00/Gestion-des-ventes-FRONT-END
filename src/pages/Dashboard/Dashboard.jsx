import React from 'react';
import './Dashboard.css';
import TitrePage from '../../components/TitrePage/TitrePage';
import CardDashboard from '../../components/CardDashboard';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <TitrePage titre="Dashboard" />
      <div className="card-container">
        <CardDashboard titre="TOTAL CA" valeur="15 689 250 Ar" color="#4CAF50" icon="fa-dollar-sign" />
        <CardDashboard titre="TOTAL CLIENT" valeur="15"  color="#2196f3" icon="fa-users" />
        <CardDashboard titre="TOTAL MATERIEL" valeur="75" color="#f6b12d" icon="fa-box-archive" />
        <CardDashboard titre="TOTAL VENTE" valeur="60" color="#f44336" icon="fas fa-cart-shopping" />
      </div>
    </div>
  )
}

export default Dashboard