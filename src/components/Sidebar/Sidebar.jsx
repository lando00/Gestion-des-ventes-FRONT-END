import React from 'react';
import './Sidebar.css';
import logo from '../../assets/images/logo.png';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <img src={logo} alt="logo" className='logo' />
        <ul className="menu">
            <li>
                <a href="#" className='menu-active'>
                    <i className='fas fa-chart-simple'></i>Dashboard
                </a>
            </li>
            <li>
                <a href="#">
                    <i className='fas fa-users'></i>Clients
                </a>
            </li>
            <li>
                <a href="#">
                    <i className='fas fa-box-archive'></i>Matériels
                </a>
            </li>
            <li>
                <a href="#">
                    <i className='fas fa-shopping-cart'></i>Ventes
                </a>
            </li>
            <li>
                <a href="#">
                    <i className='fas fa-gear'></i>Paramètres
                </a>
            </li>
            <li>
                <a href="#">
                    <i className='fas fa-right-from-bracket'></i>Déconnecter
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar