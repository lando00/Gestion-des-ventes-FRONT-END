import React from 'react';

const TabLigne = () => {
  return (
    <div className="entree">
        <div className="cellules">
            <span>Rabe</span>
        </div>
        <div className="cellules">
            <span>Ecran</span>
        </div>
        <div className="cellules">
            <span>50000Ar</span>
        </div>
        <div className="cellules">
            <span>5</span>
        </div>
        <div className="cellules">
            <span>15000</span>
        </div>
        <div className="cellules">
            <span>23/04/2023</span>
        </div>
        <div className="cellules"> 
            <span><i className='fas fa-trash-can' style={{color:'#fe3a3a', marginLeft:'25px'}} title='Supprimer'></i></span>
        </div>  
    </div>

  )
}

export default TabLigne