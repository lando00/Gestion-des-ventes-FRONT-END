import React from 'react';
import { Link } from 'react-router-dom';

const TabLigne = () => {
  return (
    <div className="entree">
        <div className="cellules">
            <span>MAT01</span>
        </div>
        <div className="cellules">
            <span>Ecran</span>
        </div>
        <div className="cellules">
            <span>50000Ar</span>
        </div>
        <div className="cellules">
            <span>30</span>
        </div>
        <div className="cellules"> 
            <span>
                <Link to="/materiels/modifier">
                    <i className='fas fa-pen-to-square'style={{color:'#4caf50'}} title='Editer'></i>
                </Link>
            </span>
            <span><i className='fas fa-trash-can' style={{color:'#fe3a3a'}} title='Supprimer'></i></span>
        </div>  
    </div>

  )
}

export default TabLigne