import React from 'react';
import { Link } from 'react-router-dom';

const TabLigne = () => {
  return (
    <div className="entree">
        <div className="cellules">
            <span>CL01</span>
        </div>
        <div className="cellules">
            <span>RAKOTONIRINA</span>
        </div>
        <div className="cellules">
            <span>Rabe</span>
        </div>
        <div className="cellules">
            <span>0345678912</span>
        </div>
        <div className="cellules">
            <span>
                <Link to="/clients/info/CL01">          
                    <i className='fas fa-address-card' style={{color:'#4caf50'}} title='Info client'></i>
                </Link>
            </span>
            <span>
                <Link to="/clients/facture">
                    <i className='fas fa-rectangle-list' style={{color:'#4caf50'}} title='Facture'></i>
                </Link>
            </span>
            <span>
                <Link to="/clients/modifier">
                    <i className='fas fa-pen-to-square'style={{color:'#4caf50'}} title='Editer'></i>
                </Link>
            </span>
            <span><i className='fas fa-trash-can' style={{color:'#fe3a3a'}} title='Supprimer'></i></span>
        </div>  
    </div>

  )
}

export default TabLigne