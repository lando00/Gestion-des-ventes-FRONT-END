import React, { useEffect } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import './Clients.css';
import TitrePage from '../../components/TitrePage/TitrePage';

const clients = () => {
  const navigate = useNavigate();
  useEffect(() => { 
    navigate("/clients/liste");
  },[])
  return (
    <div className='clients'>
      <TitrePage titre="Clients" />
      <ul className="sous-menu">
        <li>
          <NavLink to="/clients/liste">LISTE CLIENT</NavLink>
        </li>
        <li>
          <NavLink to="/clients/nouveau">NOUVEAU CLIENT</NavLink>
        </li>
        <li>
          <NavLink to="/clients/chiffre_affaire">CHIFFRE D'AFFAIRE</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  )
}

export default clients