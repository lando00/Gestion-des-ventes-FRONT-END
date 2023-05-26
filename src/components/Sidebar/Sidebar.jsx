import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import logo from '../../assets/images/logo.png';


const Sidebar = () => {
  return (
    <div className='sidebar'>
        <img src={logo} alt="logo" className='logo' />
        <ul className="menu">
            <li>
                <NavLink to="/" className='menu-active'>
                    <i className='fas fa-chart-simple'></i>Dashboard
                </NavLink>
            </li>
            <li>
                <NavLink to="/clients">
                    <i className='fas fa-users'></i>Clients
                </NavLink>
            </li>
            <li>
                <NavLink to="/materiels">
                    <i className='fas fa-box-archive'></i>Matériels
                </NavLink>
            </li>
            <li>
                <NavLink to="/ventes">
                    <i className='fas fa-shopping-cart'></i>Ventes
                </NavLink>
            </li>
            <li>
                <NavLink to="/parametres">
                    <i className='fas fa-gear'></i>Paramètres
                </NavLink>
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