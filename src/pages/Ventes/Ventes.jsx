import React, {useEffect} from 'react';
import { Outlet, useNavigate, NavLink } from 'react-router-dom';
import './Ventes.css';
import TitrePage from '../../components/TitrePage/TitrePage';

const Ventes = () => {

  const navigate = useNavigate();
  useEffect(() => { 
    navigate("/ventes/liste");
  },[])

  return (
    <div className='ventes'>
       <TitrePage titre="Ventes" />
       <ul className="sous-menu">
          <li>
            <NavLink to="/ventes/liste">LISTE DES VENTES</NavLink>
          </li>
          <li>
            <NavLink to="/ventes/nouveau">EFFECTUER UNE VENTE</NavLink>
          </li>
        </ul>
        <Outlet />
    </div>
  )
}

export default Ventes